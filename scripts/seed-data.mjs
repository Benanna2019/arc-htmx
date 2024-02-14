import data from "@begin/data";

export const products = [
  {
    key: "cls4x4vgt000008i6bw8u0b07",
    name: "Yeti Hondo",
    description: "soo nice",
    status: "AVAILABLE",
    price: 3423,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5dfbed262849d7961377c2c0",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg",
    },
  },
  {
    key: "cls4x51s5000108i6gwbicxba",
    name: "Airmax 270",
    description: "Great shoes!",
    status: "AVAILABLE",
    price: 5234,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a13f0689b2835ae71d1a5",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg",
    },
  },
  {
    key: "cls4x5782000208i6edng4dj7",
    name: "KITH Hoodie",
    description: "Love this hoodie",
    status: "AVAILABLE",
    price: 23562,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a13ff689b2835ae71d1a7",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg",
    },
  },
  {
    key: "cls4x5ccz000308i68a1749rq",
    name: "Fanorak",
    description: "Super hip. Comes in a number of colours",
    status: "AVAILABLE",
    price: 252342,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a1413689b2835ae71d1a9",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png",
    },
  },
  {
    key: "cls4x5ii9000408i655qse0eo",
    name: "Nike Vapormax",
    description: "Kind of squeaky on some floors",
    status: "AVAILABLE",
    price: 83456,
    owner: null,
    photo: {
      id: "5e2a142c689b2835ae71d1ab",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg",
    },
  },
  {
    key: "cls4x5nxh000508i62zjngrjh",
    name: "Yeti Cooler",
    description: "Who spends this much on a cooler?!",
    status: "AVAILABLE",
    price: 75654,
    owner: null,
    photo: {
      id: "5e2a143f689b2835ae71d1ad",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg",
    },
  },
  {
    key: "cls4x5u4t000008l6biau2kwx",
    name: "Naked and Famous Denim",
    description: "Japanese Denim, made in Canada",
    status: "AVAILABLE",
    price: 10924,
    owner: null,
    photo: {
      id: "5e2a145d689b2835ae71d1af",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg",
    },
  },
  {
    key: "cls4x5z85000108l6f7ez11se",
    name: "Rimowa Luggage",
    description: "S T E A L T H",
    status: "AVAILABLE",
    price: 47734,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a147b689b2835ae71d1b1",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png",
    },
  },
  {
    key: "cls4x6pt1000208l6bzxq8ghx",
    name: "Black Hole",
    description: "Outdoorsy ",
    status: "AVAILABLE",
    price: 4534,
    owner: "test@test.com",
    photo: {
      id: "5e2a149b689b2835ae71d1b3",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg",
    },
  },
  {
    key: "cls4x6wyo000308l6anssb4j1",
    name: "Nudie Belt",
    description: "Sick design",
    status: "AVAILABLE",
    price: 5234,
    owner: "",
    photo: {
      id: "5e2a14b1689b2835ae71d1b5",

      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg",
    },
  },
  {
    key: "cls4x755b000408l6702f9f1n",
    name: "Goose",
    description: "Keep warm.",
    status: "AVAILABLE",
    price: 74544,
    owner: "",
    photo: {
      id: "5e2a14bf689b2835ae71d1b7",
      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg",
    },
  },
  {
    key: "cls4x7adq000508l6f1zy7kh6",
    name: "Ultraboost",
    description: "blacked out",
    status: "AVAILABLE",
    price: 6344,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a14cc689b2835ae71d1b9",

      image:
        "https://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg",
    },
  },
];

async function seed() {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    await data.set({ table: "products", ...product });
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
}

seed();
