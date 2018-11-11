import * as firebase from "firebase";

let beersRef;
const usersRates = [];

function addNewBeer(beer) {
  console.debug(`add a new beer ${beer}`);
  beersRef.push(beer);
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
  beersRef = firebase.database().ref("beers");

  const dbRef = beersRef.orderByChild("name");

  dbRef.on("child_added", data => {
    const item = data.val();
    item.key = data.key;
    console.debug(`onChildAdded ${JSON.stringify(item)}`);
    onAddBeer(item);
  });
  dbRef.on("child_changed", data => {
    const item = data.val();
    item.key = data.key;
    console.debug(`onChildChanged ${JSON.stringify(item)}`);
    onUpdateBeer(item);
  });
  dbRef.on("child_removed", data => {
    console.debug(`onChildRemoved ${JSON.stringify(data.key)}`);
    onDeleteBeer(data.key);
  });
}

export default {
  addNewBeer,
  getBeers,
  rateBeer
};
