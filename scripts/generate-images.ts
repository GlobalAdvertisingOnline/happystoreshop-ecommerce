import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

// ─── Config ──────────────────────────────────────────────────────────
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("❌ GEMINI_API_KEY environment variable is required");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`;
const SCORE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`;
const OUTPUT_DIR = path.join(__dirname, "generated-images");
const MIN_DELAY_MS = 6000; // 10 RPM = 6s between requests
const QUALITY_THRESHOLD = 7;
const MAX_RETRIES = 3;

// ─── Image Specs ─────────────────────────────────────────────────────
interface ImageSpec {
  id: string;
  filename: string;
  aspectRatio: string;
  prompt: string;
  minScore: number;
}

const BASE_STYLE =
  "Ultra-realistic, professional commercial photography, high quality, no text, no watermarks, no logos, no distorted anatomy, no blurry elements.";

const IMAGE_SPECS: ImageSpec[] = [
  {
    id: "hero",
    filename: "hero.webp",
    aspectRatio: "16:9",
    prompt: `A premium e-commerce lifestyle photograph. A happy young woman opening a beautifully packaged delivery box at her front door of a modern bright home. She has a genuine delighted expression. Warm golden-hour natural lighting streaming in. Clean minimalist interior visible behind her. Shallow depth of field. Shot with a high-end DSLR. Aspirational, warm, inviting commercial photography feel. Colors lean warm with soft blues and whites. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "about",
    filename: "about.webp",
    aspectRatio: "4:3",
    prompt: `A clean, modern e-commerce fulfillment center interior. Neatly organized shelving with branded boxes ready for shipping. A few friendly workers in branded polo shirts checking tablets and preparing orders. Warm overhead industrial lighting. The space feels professional, efficient, and trustworthy. Bright and well-lit. Wide angle shot showing the scale of operations. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-sarah",
    filename: "avatar-sarah.webp",
    aspectRatio: "1:1",
    prompt: `Professional headshot portrait of a mid-30s woman with a warm, genuine friendly smile. Light brown hair, natural makeup. She is wearing a casual blue blouse. Soft blurred neutral background. Natural studio lighting. LinkedIn-quality corporate portrait photography. Clean, approachable, trustworthy. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-james",
    filename: "avatar-james.webp",
    aspectRatio: "1:1",
    prompt: `Professional headshot portrait of an early-40s man with a confident, approachable expression and slight smile. Short dark hair, clean-shaven or neatly trimmed beard. Wearing a navy button-down shirt. Soft blurred neutral background. Natural studio lighting. LinkedIn-quality corporate portrait. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-emily",
    filename: "avatar-emily.webp",
    aspectRatio: "1:1",
    prompt: `Professional headshot portrait of a late-20s woman with a genuine happy smile showing warmth and friendliness. Dark hair, natural look. Wearing a light-colored top. Soft blurred neutral background with warm tones. Natural studio lighting. LinkedIn-quality portrait photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-michael",
    filename: "avatar-michael.webp",
    aspectRatio: "1:1",
    prompt: `Professional headshot portrait of an early-50s man with a trustworthy, warm expression and kind eyes. Salt-and-pepper hair, clean appearance. Wearing a charcoal gray blazer over a white shirt. Soft blurred neutral background. Natural studio lighting. LinkedIn-quality corporate portrait. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "tracking-hero",
    filename: "tracking-hero.webp",
    aspectRatio: "16:9",
    prompt: `A clean delivery scene: a modern white delivery van parked on a beautiful tree-lined suburban street. A delivery person in a clean uniform is placing a neatly wrapped brown package at a front doorstep. Golden hour warm sunlight. Feeling of reliability, speed, and care. Professional commercial photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "contact-hero",
    filename: "contact-hero.webp",
    aspectRatio: "16:9",
    prompt: `A friendly female customer support representative wearing a professional headset, sitting at a clean modern white desk with a laptop. She has a warm, genuine smile and is engaged in helping a customer. Bright, modern office environment with soft natural lighting from large windows. Plants visible in the background. Professional, approachable, trustworthy atmosphere. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "og-image",
    filename: "og-image.webp",
    aspectRatio: "16:9",
    prompt: `A premium brand still life: an elegant dark navy shopping bag with gold tissue paper peeking out, placed on a clean white marble surface. Soft warm lighting from the left. Minimalist composition. A small gift box with a ribbon sits beside it. Luxury e-commerce feel. Aspirational and trustworthy. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────
function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

let lastRequestTime = 0;

async function rateLimitedFetch(url: string, body: object): Promise<any> {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < MIN_DELAY_MS) {
    await sleep(MIN_DELAY_MS - elapsed);
  }
  lastRequestTime = Date.now();

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  return res.json();
}

// ─── Generate Image ──────────────────────────────────────────────────
async function generateImage(spec: ImageSpec): Promise<Buffer> {
  console.log(`  🎨 Generating ${spec.id}...`);

  const json = await rateLimitedFetch(API_URL, {
    contents: [{ parts: [{ text: spec.prompt }] }],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
      temperature: 1.0,
      topP: 0.95,
    },
  });

  // Extract image data from response
  const candidate = json.candidates?.[0];
  if (!candidate) {
    throw new Error(`No candidates in response for ${spec.id}: ${JSON.stringify(json).slice(0, 500)}`);
  }

  const imagePart = candidate.content?.parts?.find(
    (p: any) => p.inlineData?.mimeType?.startsWith("image/")
  );

  if (!imagePart) {
    throw new Error(
      `No image in response for ${spec.id}. Parts: ${JSON.stringify(candidate.content?.parts?.map((p: any) => Object.keys(p))).slice(0, 300)}`
    );
  }

  return Buffer.from(imagePart.inlineData.data, "base64");
}

// ─── Score Image ─────────────────────────────────────────────────────
async function scoreImage(
  imageBuffer: Buffer,
  spec: ImageSpec
): Promise<number> {
  console.log(`  📊 Scoring ${spec.id}...`);

  const base64 = imageBuffer.toString("base64");

  const json = await rateLimitedFetch(SCORE_URL, {
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: "image/png",
              data: base64,
            },
          },
          {
            text: `You are an expert commercial photography critic and e-commerce visual quality assessor.

Score this image on a scale of 1-10 based on these criteria:
1. **Visual Quality** (sharpness, lighting, composition, color balance)
2. **Commercial Appropriateness** (suitable for a premium e-commerce website)
3. **Trustworthiness** (does it inspire confidence and professionalism)
4. **Prompt Adherence** (how well it matches: "${spec.prompt.slice(0, 200)}...")

Respond with ONLY a JSON object: {"score": N, "reason": "brief explanation"}`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.2,
    },
  });

  const text =
    json.candidates?.[0]?.content?.parts?.find((p: any) => p.text)?.text || "";

  // Parse score from response
  const jsonMatch = text.match(/\{[^}]*"score"\s*:\s*(\d+)[^}]*\}/);
  if (jsonMatch) {
    const score = parseInt(jsonMatch[1], 10);
    const reasonMatch = text.match(/"reason"\s*:\s*"([^"]+)"/);
    console.log(
      `  📊 Score: ${score}/10 — ${reasonMatch?.[1] || "no reason"}`
    );
    return score;
  }

  // Fallback: try to find any number
  const numMatch = text.match(/(\d+)\s*\/\s*10/);
  if (numMatch) {
    const score = parseInt(numMatch[1], 10);
    console.log(`  📊 Score: ${score}/10 (parsed from text)`);
    return score;
  }

  console.log(`  ⚠️ Could not parse score, assuming 5. Response: ${text.slice(0, 200)}`);
  return 5;
}

// ─── Convert to WebP ─────────────────────────────────────────────────
async function convertToWebP(
  input: Buffer,
  outputPath: string
): Promise<void> {
  await sharp(input).webp({ quality: 85 }).toFile(outputPath);
  const stats = fs.statSync(outputPath);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  💾 Saved ${path.basename(outputPath)} (${sizeKB}KB)`);
}

// ─── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 HappyStoreShop Image Generator");
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`🖼️  Images to generate: ${IMAGE_SPECS.length}`);
  console.log("");

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let successCount = 0;
  let failCount = 0;

  for (const spec of IMAGE_SPECS) {
    console.log(`\n── ${spec.id} (${spec.aspectRatio}) ──`);

    let accepted = false;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt > 1) {
          console.log(`  🔄 Retry ${attempt}/${MAX_RETRIES}`);
        }

        const imageBuffer = await generateImage(spec);
        const score = await scoreImage(imageBuffer, spec);

        if (score >= spec.minScore) {
          const outputPath = path.join(OUTPUT_DIR, spec.filename);
          await convertToWebP(imageBuffer, outputPath);
          console.log(`  ✅ Accepted (score: ${score}/${spec.minScore} min)`);
          accepted = true;
          successCount++;
          break;
        } else {
          console.log(
            `  ❌ Rejected (score: ${score}, need ≥${spec.minScore})`
          );
        }
      } catch (err) {
        console.error(
          `  💥 Error: ${err instanceof Error ? err.message : err}`
        );
      }
    }

    if (!accepted) {
      console.log(`  ⚠️ Failed after ${MAX_RETRIES} attempts, skipping ${spec.id}`);
      failCount++;
    }
  }

  console.log("\n" + "═".repeat(50));
  console.log(`✅ Generated: ${successCount}/${IMAGE_SPECS.length}`);
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount}/${IMAGE_SPECS.length}`);
  }
  console.log("═".repeat(50));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
