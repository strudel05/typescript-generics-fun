import IArticle from "../interfaces/IArticle";

const articles: Array<IArticle> = [
  {
    title: "10 Risks of Going to the 2022 Egg Convention",
    id: "6365c93d8f098717d5fca14e",
    likes: 1044,
    dislikes: 23,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: true,
  },
  {
    title: "How to Go to Harvard as a Blonde Lawyer",
    id: "6365c93d9dcd390b44593f6d",
    likes: 72343,
    dislikes: 566,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: true,
  },
  {
    title: "Jason Momoa Pursues Career In Programming",
    id: "6365c93d9d2c358707cdbf16",
    likes: 634,
    dislikes: 47,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: false,
  },
  {
    title: "A to Z of Underwater Basket Weaving",
    id: "6365c93d0ffa723ac0dbfe08",
    likes: 6735,
    dislikes: 97,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: false,
  },
  {
    title: "Are geese capable of empathy?",
    id: "6365c93db60ac2102fba2eaf",
    likes: 1055,
    dislikes: 8478,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: false,
  },
  {
    title: "How I grew a 20ft tall monstera plant in a cave",
    id: "6365c93ddd08fcabb4b4a7bf",
    likes: 0,
    dislikes: 5675,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: false,
  },
  {
    title:
      "Are American Ants Too Small? 25 Countries With Bigger Ants And What They Might Be Doing Right",
    id: "6365c93dcb5077f5dc779108",
    likes: 1888,
    dislikes: 2001,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: true,
  },
  {
    title: "Biggest Bob Ross Controversies Explained",

    id: "",
    likes: 62356,
    dislikes: 353,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: false,
  },
  {
    title: "Heist Crew Accidentally All Getaway Drivers",
    id: "6365c93d8b76f8d173196a64",
    likes: 33333,
    dislikes: 36,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isBookmarked: false,
  },
];

export default articles;
