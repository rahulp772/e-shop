import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css'

const firebaseConfig = {
    apiKey: "AIzaSyBJSvlzJWSxnRN2O3KUTUuu1zkesU55fMg",
    authDomain: "crwn-db-dd174.firebaseapp.com",
    projectId: "crwn-db-dd174",
    storageBucket: "crwn-db-dd174.appspot.com",
    messagingSenderId: "86673740803",
    appId: "1:86673740803:web:69fd07148777ac6ec62a36",
    measurementId: "G-VC5Z61ZHJ0"
};

firebase.initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth();
console.log("AUTH Object", auth);
auth.languageCode = 'it';

provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

export {auth};

export const signInWithGoogle = async () => {
    return await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

// db Related Services
const db = getFirestore();

export const getUser = async ({uid}) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("User already exist."); 
    return docSnap.data();
  } else {
    console.log("User not exist."); 
    return false
  }
}

export const addUser = async (data) => {
  try {
    const addedUser = await setDoc(doc(db, "users", data.uid), data);
    console.log("New User Created Successfully."); 
    return addedUser;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}