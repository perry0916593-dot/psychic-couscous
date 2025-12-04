// Firebase configuration for your app
const firebaseConfig = {
  apiKey: "AIzaSyCgm3pqk0g4sATsGR-pyLuhOevZq9LGATY",
  authDomain: "my-social-app-c1fb8.firebaseapp.com",
  projectId: "my-social-app-c1fb8",
  storageBucket: "my-social-app-c1fb8.appspot.com",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:94e044ea01d578e8a876b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();
