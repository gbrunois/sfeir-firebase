import beers from "./beers.mock.json";

const usersRates = [];

function addNewBeer(beer) {
  beers.push(beer);
}

function rateBeer(rating, beer, user) {
  console.debug(`rateABeer(${beer.key}, ${rating})`);
  usersRates.push({
    key: beer.key,
    uid: user.uid,
    rating
  });
}

function getBeers(onChange) {
  return onChange(beers);
}

export default {
  addNewBeer,
  getBeers,
  rateBeer
};
