import data from "@begin/data";

export const products = [
  {
    key: "cls4x51s5000108i6gwbicxba",
    name: "Nintendo 64",
    description: "The greatest console ever",
    status: "AVAILABLE",
    price: 52234,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a13f0689b2835ae71d1a5",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/N64-Console-Set.png/2880px-N64-Console-Set.png",
    },
  },
  {
    key: "cls4x5ccz000308i68a1749rq",
    name: "Yugioh: Dark Duel Stories",
    description: "Awesome ability to put in card codes.",
    status: "AVAILABLE",
    price: 252342,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a1413689b2835ae71d1a9",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Yu-Gi-Oh_Dark_duel_Stories_cover.jpg",
    },
  },
  {
    key: "cls4x5ii9000408i655qse0eo",
    name: "Pokemon Crystal Version",
    description: "One of the best pokemon games ever",
    status: "AVAILABLE",
    price: 31056,
    owner: null,
    photo: {
      id: "5e2a142c689b2835ae71d1ab",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/84/Pok%C3%A9mon_Crystal_box_art.png",
    },
  },
  {
    key: "cls4x5nxh000508i62zjngrjh",
    name: "Pokemon Red Version",
    description: "My all time favorite pokemon game",
    status: "AVAILABLE",
    price: 28954,
    owner: null,
    photo: {
      id: "5e2a143f689b2835ae71d1ad",
      image:
        "https://media.gamestop.com/i/gamestop/10129627/Pokemon-Red-Version---Game-Boy?$pdp$",
    },
  },
  {
    key: "cls4x5u4t000008l6biau2kwx",
    name: "Legend of Zelda: The Minish Cap",
    description: "One of the most underrated zelda games",
    status: "AVAILABLE",
    price: 10924,
    owner: null,
    photo: {
      id: "5e2a145d689b2835ae71d1af",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/a5/The_Legend_of_Zelda_The_Minish_Cap_Game_Cover.JPG",
    },
  },
  {
    key: "cls4x5z85000108l6f7ez11se",
    name: "Sega Nomad",
    description: "Madden '97 was incredible",
    status: "AVAILABLE",
    price: 47734,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a147b689b2835ae71d1b1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sega-Nomad-Front.jpg/2560px-Sega-Nomad-Front.jpg",
    },
  },
  {
    key: "cls4x6pt1000208l6bzxq8ghx",
    name: "Gameboy Advanced",
    description: "So much emerald version and zelda",
    status: "AVAILABLE",
    price: 4534,
    owner: "test@test.com",
    photo: {
      id: "5e2a149b689b2835ae71d1b3",
      image:
        "https://handheldlegend.com/cdn/shop/products/Front_Custom_1931c192-3f7c-4f97-976c-63d644082e6f.jpg?v=1697227610",
    },
  },
  {
    key: "cls4x6wyo000308l6anssb4j1",
    name: "Gameboy Color",
    description: "Many car trips were saved by this thing",
    status: "AVAILABLE",
    price: 5234,
    owner: "",
    photo: {
      id: "5e2a14b1689b2835ae71d1b5",

      image:
        "https://backinthebox.com/cdn/shop/files/berryred_800x.jpg?v=1687366274",
    },
  },
  {
    key: "cls4x755b000408l6702f9f1n",
    name: "Sega Dreamcast",
    description: "Easily forgotten, highly underrated",
    status: "AVAILABLE",
    price: 74544,
    owner: "",
    photo: {
      id: "5e2a14bf689b2835ae71d1b7",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Dreamcast-Console-Set.png",
    },
  },
  {
    key: "cls4x7adq000508l6f1zy7kh6",
    name: "Game Boy",
    description: "OG Game Boy",
    status: "AVAILABLE",
    price: 6344,
    owner: "bass41992ben@gmail.com",
    photo: {
      id: "5e2a14cc689b2835ae71d1b9",

      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/1920px-Game-Boy-FL.jpg",
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
