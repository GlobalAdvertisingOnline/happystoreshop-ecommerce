import { Product } from "@/lib/types/product";
import { PRODUCT_IMAGES } from "@/lib/constants";

export const ceramicPlanterSet: Product = {
  slug: "ceramic-planter-set",
  name: "Ceramic Planter Set",
  shortDescription:
    "Set of three artisan-crafted ceramic planters with bamboo saucers. Perfect for succulents, herbs, and small houseplants.",
  description: `<p>Bring nature indoors with our Ceramic Planter Set. Each planter is handcrafted by skilled artisans using a proprietary matte glaze that develops a unique character over time.</p>
<p>The set includes three sizes — small (4"), medium (5"), and large (6") — each with a matching bamboo saucer and drainage hole. Ideal for succulents, herbs, cacti, and small houseplants.</p>
<ul>
<li>Handcrafted matte ceramic</li>
<li>Three sizes: 4", 5", 6" diameter</li>
<li>Matching bamboo saucers included</li>
<li>Drainage holes for healthy roots</li>
<li>Lead-free, food-safe glaze</li>
<li>Works indoors and outdoors</li>
</ul>`,
  category: "Decor",
  type: "physical",
  images: [
    { src: PRODUCT_IMAGES.planterSet1, alt: "Set of three ceramic planters with succulents" },
    { src: PRODUCT_IMAGES.planterSet2, alt: "Ceramic planter detail showing matte glaze finish" },
  ],
  variants: [
    {
      id: "planter-white",
      name: "Matte White",
      sku: "HSS-PLANTER-WHT",
      price: 4900,
      compareAtPrice: 6500,
      inStock: true,
    },
    {
      id: "planter-terracotta",
      name: "Terracotta",
      sku: "HSS-PLANTER-TER",
      price: 4900,
      compareAtPrice: 6500,
      inStock: true,
    },
    {
      id: "planter-black",
      name: "Matte Black",
      sku: "HSS-PLANTER-BLK",
      price: 5400,
      compareAtPrice: 7900,
      inStock: true,
    },
  ],
  features: [
    "Handcrafted matte ceramic",
    "Three sizes included (4\", 5\", 6\")",
    "Bamboo saucers included",
    "Drainage holes",
    "Lead-free, food-safe glaze",
    "Indoor/outdoor use",
  ],
  rating: 4.6,
  reviewCount: 156,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 2-3 business days. Carefully packaged to prevent breakage.",
  seo: {
    title: "Ceramic Planter Set | HappyStoreShop",
    description:
      "Handcrafted ceramic planter set with bamboo saucers. Three sizes for succulents, herbs, and small houseplants. Indoor/outdoor.",
  },
  checkoutChampProductId: "",
};
