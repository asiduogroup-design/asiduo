const categories = [
  {
    name: "Export Products",
    slug: "export-products",
    type: "export",
    description: "Premium agricultural and handcrafted products for international buyers."
  },
  {
    name: "Imported Food Products",
    slug: "imported-food-products",
    type: "import",
    description: "Carefully sourced international food and specialty consumer products."
  },
  {
    name: "Technical Imports",
    slug: "technical-imports",
    type: "technical",
    description: "Engineered products and industrial-grade systems for safety-critical environments."
  }
];

const products = [
  {
    name: "Rice",
    category: "export",
    description: "High-quality export-grade rice sourced from trusted farming partners with consistent grain size, aroma, and purity.",
    images: ["https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775805089/rice_mbckss.jpg"],
    originCountry: "India",
    packaging: "25kg / 50kg PP Bags",
    MOQ: "1 x 20ft Container"
  },
  {
    name: "Pulses",
    category: "export",
    description: "Nutritious pulses processed to international standards with dependable packing and shipment support.",
    images: ["https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775805081/best-import-and-export-for-pulses-easyway-impex_x73hog.webp"],
    originCountry: "India",
    packaging: "25kg Laminated Bags",
    MOQ: "10 MT"
  },
  {
    name: "Turmeric",
    category: "export",
    description: "Premium turmeric with vibrant color, high curcumin content, and secure moisture-controlled packaging.",
    images: ["https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775805074/turmeric_tdnsib.jpg"],
    originCountry: "India",
    packaging: "25kg HDPE Bags",
    MOQ: "5 MT"
  },
  {
    name: "Glass Beads",
    category: "export",
    description: "Decorative and industrial-grade glass beads available in custom sizing and export-ready packing formats.",
    images: ["https://res.cloudinary.com/dlx9tnj7p/image/upload/v1775805097/glass-beads-500x500_pitjtt.webp"],
    originCountry: "India",
    packaging: "Cartons with inner packs",
    MOQ: "500 Kg"
  },
  {
    name: "Handloom Bags",
    category: "export",
    description: "Eco-conscious handloom bags combining craftsmanship, durability, and custom branding options.",
    images: ["https://images.unsplash.com/photo-1566618501882-c70a9736e23e?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "India",
    packaging: "50 pieces per carton",
    MOQ: "1000 Pieces"
  },
  {
    name: "Spices",
    category: "export",
    description: "A curated portfolio of whole and ground spices supplied with strict quality checks for global trade.",
    images: ["https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "India",
    packaging: "10kg / 25kg Food-grade Bags",
    MOQ: "2 MT"
  },
  {
    name: "Parmigiano Cheese",
    category: "import",
    description: "Authentic premium hard cheese imported for gourmet retail and food service distribution.",
    images: ["https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "Italy",
    packaging: "Vacuum-packed wheels and wedges",
    MOQ: "250 Kg"
  },
  {
    name: "Premium Dog Food",
    category: "import",
    description: "Imported nutritionally balanced dog food from globally recognized premium pet care brands.",
    images: ["https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "Europe",
    packaging: "5kg / 10kg / 20kg Bags",
    MOQ: "1 Pallet"
  },
  {
    name: "Premium Cat Food",
    category: "import",
    description: "High-quality imported cat food formulated for health, palatability, and premium retail positioning.",
    images: ["https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "Europe",
    packaging: "2kg / 5kg / 10kg Bags",
    MOQ: "1 Pallet"
  },
  {
    name: "Specialty Food Products",
    category: "import",
    description: "Curated specialty foods for upscale retail and distribution channels seeking differentiated products.",
    images: ["https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "Italy",
    packaging: "Retail-ready cartons",
    MOQ: "Mixed pallet"
  },
  {
    name: "ATEX Panels",
    category: "technical",
    description: "Explosion-protected ATEX-certified control panels for hazardous industrial installations.",
    images: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "EU",
    packaging: "Crated for industrial transit",
    MOQ: "1 Unit"
  },
  {
    name: "Industrial Lighting",
    category: "technical",
    description: "Heavy-duty industrial lighting solutions engineered for hazardous and high-performance environments.",
    images: ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "Germany",
    packaging: "Shock-resistant boxed units",
    MOQ: "10 Units"
  },
  {
    name: "Engineering Technology",
    category: "technical",
    description: "Advanced engineering systems and component solutions tailored for industrial modernization and plant efficiency.",
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "Europe",
    packaging: "Project-specific industrial packaging",
    MOQ: "Project basis"
  },
  {
    name: "Explosion-proof Equipment",
    category: "technical",
    description: "Certified explosion-proof equipment designed for oil, gas, chemical, and hazardous manufacturing sectors.",
    images: ["https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"],
    originCountry: "EU",
    packaging: "Industrial crates and pallets",
    MOQ: "1 Unit"
  }
];

module.exports = {
  categories,
  products
};
