import * as firebase from "firebase";

async function store({ file, metadata }) {
  const storageRef = firebase.storage().ref();
  try {
    const uploadTask = await storageRef
      .child(`images/${file.name}`)
      .put(file, metadata);

    return await uploadTask.ref.getDownloadURL();
  } catch (error) {
    console.error("Upload failed:", error);
  }
}

export default {
  store
};
