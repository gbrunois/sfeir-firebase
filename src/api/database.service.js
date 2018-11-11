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

function getBeers(onValue) {
  const beersRef = firebase
    .database()
    .ref("beers")
    .orderByChild("name")
    .limitToLast(20);
  beersRef.on("value", snapshot => {
    const beers = [];
    snapshot.forEach(childSnapshot => {
      const childData = childSnapshot.val();
      beers.push(childData);
    });
    onValue(beers);
  });
}

export default {
  addNewBeer,
  getBeers,
  rateBeer
};
