import * as firebase from "firebase";

const usersRates = [];
const beers = [];

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

function getBeers(onAddBeer, onUpdateBeer, onDeleteBeer) {
  const beersRef = firebase
    .database()
    .ref("beers")
    .orderByChild("name")
    .limitToLast(20);

  beersRef.on("child_added", data => {
    const item = data.val();
    item.key = data.key;
    onAddBeer(item);
  });
  beersRef.on("child_changed", data => {
    const item = data.val();
    item.key = data.key;
    onUpdateBeer(item);
  });
  beersRef.on("child_removed", data => {
    onDeleteBeer(data.key);
  });
}

export default {
  addNewBeer,
  getBeers,
  rateBeer
};
