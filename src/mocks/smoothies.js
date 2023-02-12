export const SMOOTHIES = [
  {
    id: 1,
    title: "Créez votre smoothie !",
    description:
      "Allant de 2 à 5 saveurs créez votre smoothie ultra fruité et à votre goût.",
    ingredients: [],
    size: [],
    color: "#ff8b8b",
  },
  {
    id: 2,
    title: "Coup de gourde",
    description: "Un smoothie qui va vous taper à la tête !",
    ingredients: [
      {
        id: 1,
        name: "Oranges sanguine",
        isAvailable: true,
        allergens: [
          {
            id: 1,
            name: "Agrumes",
            icon: "agrums.svg",
          },
        ],
        included: true,
      },
      {
        id: 2,
        name: "Framboise",
        isAvailable: true,
        allergens: [
          {
            id: 2,
            name: "Fruits rouges",
            icon: "red_fruit.svg",
          },
        ],
        included: true,
      },
      {
        id: 3,
        name: "Mangue",
        isAvailable: true,
        allergens: [
          {
            id: 3,
            name: "Armoise",
            icon: "armoise.svg",
          },
        ],
        included: true,
      },
      {
        id: 4,
        name: "Miel",
        isAvailable: true,
        allergens: [
          {
            id: 4,
            name: "Pollen",
            icon: "pollen.svg",
          },
        ],
        included: true,
      },
      {
        id: 5,
        name: "Canelles",
        isAvailable: true,
        allergens: [
          {
            id: 3,
            name: "Armoise",
            icon: "armoise.svg",
          },
        ],
        included: true,
      },
    ],
    size: [
      {
        id: 1,
        name: "Signature",
        price: 7.0,
        maxIngredients: 10,
      },
    ],
    color: "#cc0000",
  },
  {
    id: 3,
    title: "Gourmand",
    description: "Pour se faire plaisir sans soucier d'après.",
    ingredients: [
      {
        id: 6,
        name: "Banane",
        isAvailable: true,
        allergens: [
          {
            id: 5,
            name: "Latex",
            icon: "latex.svg",
          },
        ],
        included: true,
      },
      {
        id: 7,
        name: "Beurre de cacahuètes",
        isAvailable: true,
        allergens: [
          {
            id: 6,
            name: "Arachides",
            icon: "nuts.svg",
          },
        ],
        included: true,
      },
      {
        id: 8,
        name: "Lait d'amande",
        isAvailable: true,
        allergens: [
          {
            id: 7,
            name: "Fruit à coque",
            icon: "amaranth.svg",
          },
        ],
        included: true,
      },
    ],
    size: [{
      id: 2,
      name: "Gourmands",
      price: 6.5,
      maxIngredients: 10,
    }],
    color: "#b97608",
  },
  {
    id: 4,
    title: "Healthy",
    description:
      "Pour tous nos fit boys et fit girls et tous les autres fit bien évidemment 💪",
    ingredients: [
      {
        id: 9,
        name: "Kale",
        isAvailable: true,
        allergens: [
          {
            id: 8,
            name: "Choux",
            icon: "cabbage.svg",
          },
        ],
        included: true,
      },
      {
        id: 6,
        name: "Banane",
        isAvailable: true,
        allergens: [
          {
            id: 5,
            name: "Latex",
            icon: "latex.svg",
          },
        ],
        included: true,
      },
      {
        id: 10,
        name: "Pomme",
        isAvailable: true,
        allergens: [
          {
            id: 9,
            name: "Pépins",
            icon: "pip.svg",
          },
        ],
        included: true,
      },
      {
        id: 11,
        name: "Lait d'avoines",
        isAvailable: true,
        allergens: [
          {
            id: 10,
            name: "Gluten",
            icon: "gluten.svg",
          },
        ],
        included: true,
      },
    ],
    size: [{
      id: 3,
      name: "Healthy's",
      price: 7.5,
      maxIngredients: 10,
    }],
    color: "#a4ff9d",
  },
  {
    id: 5,
    title: "Énergisant",
    description: "Pour un petit coup de peps !",
    ingredients: [
      {
        id: 12,
        name: "Guarana",
        isAvailable: true,
        allergens: [
          {
            id: 11,
            name: "Caféine",
            icon: "coffee.svg",
          },
        ],
        included: true,
      },
      {
        id: 13,
        name: "Cerise",
        isAvailable: true,
        allergens: [
          {
            id: 12,
            name: "LTP",
            icon: "ltp.svg",
          },
        ],
        included: true,
      },
      {
        id: 2,
        name: "Framboise",
        isAvailable: true,
        allergens: [
          {
            id: 2,
            name: "Fruits rouges",
            icon: "red_fruit.svg",
          },
        ],
        included: true,
      },
      {
        id: 10,
        name: "Pomme",
        isAvailable: true,
        allergens: [
          {
            id: 9,
            name: "Pépins",
            icon: "pip.svg",
          },
        ],
        included: true,
      },
    ],
    size: [{
      id: 3,
      name: "Healthy's",
      price: 7.5,
      maxIngredients: 10,
    }],
    color: "#60D0F3",
  },
];
