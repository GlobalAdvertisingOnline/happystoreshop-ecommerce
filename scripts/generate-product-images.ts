import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

// ─── Config ──────────────────────────────────────────────────────────
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("GEMINI_API_KEY environment variable is required");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`;
const SCORE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`;
const OUTPUT_DIR = path.join(__dirname, "generated-images");
const MIN_DELAY_MS = 6000;
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
  "Ultra-realistic, professional commercial jewelry photography, high quality, clean white or soft neutral background, no text, no watermarks, no logos, no distorted elements.";

const PRODUCT_SPECS: ImageSpec[] = [
  // ── Necklaces ──
  {
    id: "layering-chain-1",
    filename: "product-layering-chain-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional product photography of a delicate fine gold layering chain necklace displayed on a white marble surface. Minimalist styling with soft diffused lighting. The chain is artfully arranged to show its delicate links. Clean, elegant commercial jewelry product shot. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "layering-chain-2",
    filename: "product-layering-chain-2.webp",
    aspectRatio: "1:1",
    prompt: `Close-up detail shot of a fine gold layering chain necklace being worn on a woman's neck, showing the clasp area and how it layers against skin. Soft warm lighting, shallow depth of field. Fashion editorial style. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "bar-pendant-1",
    filename: "product-bar-pendant-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional flat-lay product photography of a minimalist horizontal bar pendant necklace in gold or silver on a clean white background. The pendant is centered with the chain arranged in a gentle curve. Bright, even lighting. Clean commercial jewelry catalog style. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "bar-pendant-2",
    filename: "product-bar-pendant-2.webp",
    aspectRatio: "1:1",
    prompt: `Close-up detail shot of a minimalist bar pendant necklace showing the engraved or polished surface texture of the bar. Macro photography style with soft bokeh background. The bar pendant catches the light beautifully. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "fine-cable-chain-1",
    filename: "product-fine-cable-chain-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional product photography of a refined cable chain necklace in gold displayed on a dark velvet jewelry display stand. The chain links are clearly visible, showing craftsmanship. Dramatic but clean lighting from the side. Luxury jewelry brand aesthetic. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "fine-cable-chain-2",
    filename: "product-fine-cable-chain-2.webp",
    aspectRatio: "1:1",
    prompt: `Lifestyle product shot of a fine cable chain gold necklace being worn with a simple black crew neck top. Focus on the necklace against the fabric. Clean, modern fashion photography with natural window light. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "modern-pearl-1",
    filename: "product-modern-pearl-1.webp",
    aspectRatio: "1:1",
    prompt: `Elegant product photography of a modern pearl necklace with freshwater pearls on a clean white surface with soft shadow. The pearls have a beautiful luster and are evenly spaced on a fine chain. Luxury jewelry e-commerce product photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "modern-pearl-2",
    filename: "product-modern-pearl-2.webp",
    aspectRatio: "1:1",
    prompt: `Close-up lifestyle shot of a modern pearl necklace being worn, showing the pearls resting against the collarbone area. Soft warm lighting, elegant and sophisticated mood. The pearls have a creamy iridescent sheen. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },

  // ── Earrings ──
  {
    id: "geometric-earrings-1",
    filename: "product-geometric-earrings-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional product photography of a pair of small geometric stud earrings in gold with clean angular lines. Displayed on a clean white surface, shot from slightly above. Sharp focus showing the geometric facets. Minimalist jewelry catalog photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "geometric-earrings-2",
    filename: "product-geometric-earrings-2.webp",
    aspectRatio: "1:1",
    prompt: `Close-up of geometric mini gold stud earrings being worn on a woman's ear. The angular design catches the light. Soft blurred background, fashion editorial style with clean lighting. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "minimal-hoop-1",
    filename: "product-minimal-hoop-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional product photography of a pair of classic minimal gold hoop earrings on a white background. The hoops have a smooth polished finish and catch the light beautifully. Clean, symmetrical composition. Luxury jewelry e-commerce style. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "minimal-hoop-2",
    filename: "product-minimal-hoop-2.webp",
    aspectRatio: "1:1",
    prompt: `Lifestyle product shot of minimal gold hoop earrings being worn, showing both ears. The model has her hair tucked behind her ears to showcase the hoops. Clean, modern aesthetic with soft natural lighting. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "elegant-drop-crystal-1",
    filename: "product-elegant-drop-crystal-1.webp",
    aspectRatio: "1:1",
    prompt: `Elegant product photography of long drop earrings with crystal accents on a dark luxurious background. The crystals catch and refract light beautifully. Dramatic lighting highlights the sparkle. Premium luxury jewelry photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "elegant-drop-crystal-2",
    filename: "product-elegant-drop-crystal-2.webp",
    aspectRatio: "1:1",
    prompt: `Close-up shot of elegant drop crystal earrings being worn for a formal occasion. The crystals dangle and catch the light. Soft warm lighting, shallow depth of field. Sophisticated and glamorous. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },

  // ── Rings ──
  {
    id: "textured-ring-1",
    filename: "product-textured-ring-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional product photography of a textured gold stackable ring on a clean white surface. The ring has subtle hammered or brushed texture detailing. Clean even lighting showing the texture clearly. Minimalist jewelry catalog style. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "textured-ring-2",
    filename: "product-textured-ring-2.webp",
    aspectRatio: "1:1",
    prompt: `Lifestyle shot of multiple textured gold stackable rings worn on fingers, showing how they can be stacked together. Clean hand photography with soft background. Modern jewelry fashion editorial. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "crystal-ring-1",
    filename: "product-crystal-ring-1.webp",
    aspectRatio: "1:1",
    prompt: `Elegant product photography of a modern ring with a small crystal accent stone in a minimalist setting. Displayed on a white surface with soft shadow. The crystal catches light and sparkles subtly. Clean luxury jewelry photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "crystal-ring-2",
    filename: "product-crystal-ring-2.webp",
    aspectRatio: "1:1",
    prompt: `Close-up lifestyle shot of a crystal accent ring being worn on a finger. The crystal detail is the focal point with soft bokeh background. Elegant, sophisticated mood lighting. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },

  // ── Bracelets ──
  {
    id: "double-chain-1",
    filename: "product-double-chain-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional product photography of a double chain gold bracelet displayed flat on a clean white surface. Two complementary chain styles create a layered look. Clean even lighting. Minimalist jewelry e-commerce photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "double-chain-2",
    filename: "product-double-chain-2.webp",
    aspectRatio: "1:1",
    prompt: `Lifestyle shot of a double chain gold bracelet worn on a woman's wrist. The two chain styles create an elegant layered look. Soft natural lighting, clean background. Modern fashion editorial style. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "sculpted-cuff-1",
    filename: "product-sculpted-cuff-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional product photography of a sculptural gold cuff bracelet with clean architectural curves. Displayed on a dark marble or stone surface. Dramatic side lighting emphasizes the curves and form. Statement jewelry photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "sculpted-cuff-2",
    filename: "product-sculpted-cuff-2.webp",
    aspectRatio: "1:1",
    prompt: `Lifestyle shot of a sculpted gold cuff bracelet worn on a woman's wrist. The architectural design is the focal point. Clean, modern aesthetic with soft lighting. Statement piece fashion photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },

  // ── Sets ──
  {
    id: "luxe-set-1",
    filename: "product-luxe-set-1.webp",
    aspectRatio: "1:1",
    prompt: `Professional flat-lay product photography of a coordinated luxury jewelry set including a matching gold necklace and pair of earrings, arranged elegantly on a white background. Gift-worthy presentation with clean symmetrical composition. Premium jewelry catalog photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "luxe-set-2",
    filename: "product-luxe-set-2.webp",
    aspectRatio: "1:1",
    prompt: `Lifestyle photography of a luxury jewelry set being worn — matching necklace and earrings together creating a coordinated elegant look. Soft warm lighting, clean background. The set pieces complement each other beautifully. ${BASE_STYLE}`,
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

async function generateImage(spec: ImageSpec): Promise<Buffer> {
  console.log(`  Generating ${spec.id}...`);

  const json = await rateLimitedFetch(API_URL, {
    contents: [{ parts: [{ text: spec.prompt }] }],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
      temperature: 1.0,
      topP: 0.95,
    },
  });

  const candidate = json.candidates?.[0];
  if (!candidate) {
    throw new Error(`No candidates in response for ${spec.id}`);
  }

  const imagePart = candidate.content?.parts?.find(
    (p: any) => p.inlineData?.mimeType?.startsWith("image/")
  );

  if (!imagePart) {
    throw new Error(`No image in response for ${spec.id}`);
  }

  return Buffer.from(imagePart.inlineData.data, "base64");
}

async function scoreImage(imageBuffer: Buffer, spec: ImageSpec): Promise<number> {
  console.log(`  Scoring ${spec.id}...`);

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
            text: `You are an expert commercial jewelry photography critic.

Score this image on a scale of 1-10 based on these criteria:
1. **Visual Quality** (sharpness, lighting, composition)
2. **Commercial Appropriateness** (suitable for a premium jewelry e-commerce website)
3. **Prompt Adherence** (how well it matches: "${spec.prompt.slice(0, 200)}...")

Respond with ONLY a JSON object: {"score": N, "reason": "brief explanation"}`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.2,
    },
  });

  const text = json.candidates?.[0]?.content?.parts?.find((p: any) => p.text)?.text || "";

  const jsonMatch = text.match(/\{[^}]*"score"\s*:\s*(\d+)[^}]*\}/);
  if (jsonMatch) {
    const score = parseInt(jsonMatch[1], 10);
    const reasonMatch = text.match(/"reason"\s*:\s*"([^"]+)"/);
    console.log(`  Score: ${score}/10 — ${reasonMatch?.[1] || "no reason"}`);
    return score;
  }

  const numMatch = text.match(/(\d+)\s*\/\s*10/);
  if (numMatch) {
    const score = parseInt(numMatch[1], 10);
    console.log(`  Score: ${score}/10 (parsed from text)`);
    return score;
  }

  console.log(`  Could not parse score, assuming 5`);
  return 5;
}

async function convertToWebP(input: Buffer, outputPath: string): Promise<void> {
  await sharp(input).webp({ quality: 85 }).toFile(outputPath);
  const stats = fs.statSync(outputPath);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  Saved ${path.basename(outputPath)} (${sizeKB}KB)`);
}

// ─── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log("HappyStoreShop Product Image Generator");
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Images to generate: ${PRODUCT_SPECS.length}`);
  console.log("");

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Check which images already exist (skip them)
  const existingFiles = new Set(fs.readdirSync(OUTPUT_DIR));
  const specsToGenerate = PRODUCT_SPECS.filter(
    (spec) => !existingFiles.has(spec.filename)
  );

  if (specsToGenerate.length === 0) {
    console.log("All product images already exist. Nothing to generate.");
    return;
  }

  console.log(`Skipping ${PRODUCT_SPECS.length - specsToGenerate.length} existing images`);
  console.log(`Generating ${specsToGenerate.length} new images\n`);

  let successCount = 0;
  let failCount = 0;

  for (const spec of specsToGenerate) {
    console.log(`\n-- ${spec.id} --`);

    let accepted = false;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt > 1) {
          console.log(`  Retry ${attempt}/${MAX_RETRIES}`);
        }

        const imageBuffer = await generateImage(spec);
        const score = await scoreImage(imageBuffer, spec);

        if (score >= spec.minScore) {
          const outputPath = path.join(OUTPUT_DIR, spec.filename);
          await convertToWebP(imageBuffer, outputPath);
          console.log(`  Accepted (score: ${score}/${spec.minScore} min)`);
          accepted = true;
          successCount++;
          break;
        } else {
          console.log(`  Rejected (score: ${score}, need >= ${spec.minScore})`);
        }
      } catch (err) {
        console.error(`  Error: ${err instanceof Error ? err.message : err}`);
      }
    }

    if (!accepted) {
      console.log(`  Failed after ${MAX_RETRIES} attempts, skipping ${spec.id}`);
      failCount++;
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log(`Generated: ${successCount}/${specsToGenerate.length}`);
  if (failCount > 0) {
    console.log(`Failed: ${failCount}/${specsToGenerate.length}`);
  }
  console.log("=".repeat(50));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
