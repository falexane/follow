import firebase from "firebase";

const projectId = "customhookexample";
var firebaseConfig = {
  apiKey: "AIzaSyBKy_HyHuY1TWp0jZT8vzR5D0jB6n7",
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId: projectId
};

// Uncomment if you wan't to use my database instead of your own's. Also comment/remove the above config.
// const projectId = "customhookexample";
// var firebaseConfig = {
//   apiKey: "AIzaSyBKy_HyHuY1TWp0jZT8vzR5D0jB6n7",
//   authDomain: `${projectId}.firebaseapp.com`,
//   databaseURL: `https://${projectId}.firebaseio.com`,
//   projectId: projectId
// };

firebase.initializeApp(firebaseConfig);

export default firebase;
