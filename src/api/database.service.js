import * as firebase from "firebase";

const beers = [];

let beersRef;

function addNewBeer(beer) {
  beers.push(beer);
}

function rateBeer(rating, beer, user) {
  console.debug(`rateABeer(${beer.key}, ${rating})`);
  firebase
    .database()
    .ref(`users-rates/${beer.key}/${user.uid}/rate`)
    .set(rating, function(error) {
      if (error) {
        console.log("Error: " + error.code);
      } else {
        console.debug(`rateABeer(${beer.key}) succeed`);
      }
    });
}

function getBeers(onAddBeer, onUpdateBeer, onDeleteBeer) {
  beersRef = firebase.database().ref("beers");

  const dbRef = beersRef.orderByChild("name").limitToLast(20);

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
