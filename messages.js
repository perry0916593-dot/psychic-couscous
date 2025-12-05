<script type="module">
  // Import Firebase functions
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs } 
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCgm3pqkOg4sATsImvq0R6ZPNGis4E0Oo",
    authDomain: "my-social-app-c1fb8.firebaseapp.com",
    projectId: "my-social-app-c1fb8",
    storageBucket: "my-social-app-c1fb8.appspot.com",
    messagingSenderId: "618305477782",
    appId: "1:618305477782:web:dcc6a8ff6412168e7d48a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Example: Send a message
  async function sendMessage(text) {
    await addDoc(collection(db, "messages"), {
      message: text,
      timestamp: Date.now()
    });
  }

  // Example: Load messages
  async function loadMessages() {
    const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }
</script>
