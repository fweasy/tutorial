import firebase from "firebase";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBc5Lk2SC08FoMgbR0fNg3xxCY1qRX_i9Q",
  authDomain: "moodlog-9c083.firebaseapp.com",
  databaseURL: "https://moodlog-9c083.firebaseio.com",
  projectId: "moodlog-9c083",
  storageBucket: "moodlog-9c083.appspot.com",
  messagingSenderId: "87404538407",
  appId: "1:87404538407:web:bb1ef0b23621ce2dbefc02",
  measurementId: "G-FXVYGLVEXF",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
