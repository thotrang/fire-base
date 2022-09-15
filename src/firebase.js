import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBw4Us1R6dYfYyZP2fTca5JTCmjVG2GHjU",
  authDomain: "uploadwithreact.firebaseapp.com",
  projectId: "uploadwithreact",
  storageBucket: "uploadwithreact.appspot.com",
  messagingSenderId: "149648307334",
  appId: "1:149648307334:web:d0916dff42d82eeda18d07",
  measurementId: "G-T7WMD5L917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);