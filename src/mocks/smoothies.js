export const SMOOTHIES = [
  {
    id: 0,
    title: "Créez votre smoothie !",
    description:
      "Allant de 2 à 5 saveurs créez votre smoothie ultra fruité et à votre goût.",
    ingredients: [],
    size: null,
    color: "#ff8b8b",
  },
  {
    id: 1,
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
          },
        ],
        included: true,
      },
    ],
    size: {
      id: 1,
      name: "Signature",
      price: 7.0,
      maxIngredients: 10,
    },
    color: "#cc0000",
  },
  {
    id: 2,
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
          },
        ],
        included: true,
      },
    ],
    size: {
      id: 2,
      name: "Gourmands",
      price: 6.5,
      maxIngredients: 10,
    },
    color: "#b97608",
  },
  {
    id: 2,
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
          },
        ],
        included: true,
      },
    ],
    size: {
      id: 3,
      name: "Healthy's",
      price: 7.5,
      maxIngredients: 10,
    },
    color: "#a4ff9d",
  },
  {
    id: 2,
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
          },
        ],
        included: true,
      },
    ],
    size: {
      id: 3,
      name: "Healthy's",
      price: 7.5,
      maxIngredients: 10,
    },
    color: "#a4ff9d",
  },
];
