
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-storage.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBvQ4vwG5BRFYzfZVBIGA0UoUOtZe2Or2Y",
    authDomain: "ijmb-portal-5b7eb.firebaseapp.com",
    databaseURL: "https://ijmb-portal-5b7eb-default-rtdb.firebaseio.com",
    projectId: "ijmb-portal-5b7eb",
    storageBucket: "ijmb-portal-5b7eb.firebasestorage.app",
    messagingSenderId: "843435985826",
    appId: "1:843435985826:web:10110e0ed92b95ab2880fb",
    measurementId: "G-Z4RS7FFXG2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)
  const storage = getStorage(app)