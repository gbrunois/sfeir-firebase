import * as firebase from "firebase";

const usersRates = [];
const beers = [];

let beersRef;

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
  beersRef.push(beer);
}

function getBeers(onAddBeer, onUpdateBeer, onDeleteBeer) {
  beersRef = firebase.database().ref("beers");

  const dbRef = beersRef.orderByChild("name").limitToLast(20);

  dbRef.on("child_added", data => {
    const item = data.val();
    item.key = data.key;
    onAddBeer(item);
  });
  dbRef.on("child_changed", data => {
    const item = data.val();
    item.key = data.key;
    onUpdateBeer(item);
  });
  dbRef.on("child_removed", data => {
    onDeleteBeer(data.key);
  });
}

export default {
  addNewBeer,
  getBeers,
  rateBeer
};
