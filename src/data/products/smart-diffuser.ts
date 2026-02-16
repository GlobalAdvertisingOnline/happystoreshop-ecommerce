import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const smartDiffuser: Product = {
  slug: "smart-diffuser",
  name: "Smart Aroma Diffuser",
  shortDescription:
    "App-controlled essential oil diffuser with ambient LED lighting, timer schedules, and whisper-quiet operation.",
  description: `<p>Set the perfect mood with our Smart Aroma Diffuser. This beautifully designed ultrasonic diffuser pairs with the companion app for effortless control of mist intensity, LED ambient lighting, and scheduling.</p>
<p>The 300ml tank runs up to 10 hours on a single fill, and the whisper-quiet operation (under 30dB) makes it ideal for bedrooms and offices. Choose from 7 ambient light colors or set a gentle color-cycling mode.</p>
<ul>
<li>300ml water tank — up to 10 hours</li>
<li>App-controlled via Bluetooth</li>
<li>7 ambient LED light colors</li>
<li>3 mist intensity levels</li>
<li>Timer scheduling (1h / 3h / 6h / continuous)</li>
<li>Whisper-quiet (under 30dB)</li>
<li>Auto shut-off when water runs low</li>
</ul>`,
  category: "Living Room",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.diffuser1, alt: "Smart aroma diffuser with ambient LED lighting" },
    { src: PRODUCT_IMAGES.diffuser2, alt: "Aroma diffuser on nightstand with soft mist" },
  ],
  variants: [
    {
      id: "diffuser-white",
      name: "Ceramic White",
      sku: "HSS-DIFF-WHT",
      price: 6900,
      compareAtPrice: 8900,
      inStock: true,
    },
    {
      id: "diffuser-wood",
      name: "Wood Grain",
      sku: "HSS-DIFF-WD",
      price: 6900,
      compareAtPrice: 8900,
      inStock: true,
    },
    {
      id: "diffuser-black",
      name: "Matte Black",
      sku: "HSS-DIFF-BLK",
      price: 7400,
      compareAtPrice: 9900,
      inStock: true,
    },
  ],
  features: [
    "300ml tank — 10 hours runtime",
    "Bluetooth app control",
    "7 ambient LED colors",
    "3 mist intensity levels",
    "Timer scheduling",
    "Whisper-quiet (under 30dB)",
    "Auto shut-off safety",
  ],
  rating: 4.5,
  reviewCount: 178,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-2 business days. Free shipping on orders over $75.",
  seo: {
    title: "Smart Aroma Diffuser | HappyStoreShop",
    description:
      "App-controlled essential oil diffuser with 7 LED colors, 10-hour runtime, and whisper-quiet operation. Perfect for any room.",
  },
  checkoutChampProductId: "",
};
