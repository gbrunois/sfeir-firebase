const beers = [
  {
    name: "Anosteké Blond",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  },
  {
    name: "Orval",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  },
  {
    name: "Cuvée des trolls",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  },
  {
    name: "Brewdog Punk IPA",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  },
  {
    name: "Lindemans Faro",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  },
  {
    name: "Lindemans Pêcheresse",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  },
  {
    name: "Verte du Mont Blanc",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  },
  {
    name: "Rochefort 10",
    imageUrl: "https://img.saveur-biere.com/img/p/1407-22042-v4_product_img.jpg"
  }
];
const state = {
  isLoggedIn: false
};

function addNewBeer(name) {
  beers.push({
    name
  });
}

function getBeers() {
  return beers;
}

function authenticate() {
  state.isLoggedIn = true;
}

function isAuthenticated() {
  return state.isLoggedIn;
}

function logout() {
  state.isLoggedIn = false;
}

export default {
  addNewBeer,
  getBeers,
  authenticate,
  isAuthenticated,
  logout
};
