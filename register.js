
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
  const form = document.querySelector(".form-section");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("form submitted")
    try {

        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phonenumber").value;
        const dirthofBirth = document.getElementById("dateofbirth").value;
        const state = document.getElementById("state").value;
        const localGovt = document.getElementById("localgovt").value;
        const maritalStatus = document.getElementById("marital-status").value;  const address = document.getElementById("address").value;
        const levelResult = document.getElementById("Olevel").value;
        const yearofExam = document.getElementById("yearofexam").value;
        const intendedCourse = document.getElementById("intended-course").value;
        const subject = document.getElementById("subject-combination").value;
        const fileUpload = document.getElementById("file").files[0];
        const checkbox = document.getElementById("checkbox").checked;

        if (!fileUpload) {
            alert("Please upload a file");
            return;
        }