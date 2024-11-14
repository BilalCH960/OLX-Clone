import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// const firebaseConfig = {
//       apiKey: "AIzaSyAv6Avy11_fE2HIA5wmjODSLVyOL3E6yO8",
//       authDomain: "olx-clone-7fc16.firebaseapp.com",
//       projectId: "olx-clone-7fc16",
//       storageBucket: "olx-clone-7fc16.firebasestorage.app",
//       messagingSenderId: "619846100555",
//       appId: "1:619846100555:web:7b75bcb9bb01b9c6668fce"
//     };

const firebaseConfig = {
  apiKey: "AIzaSyDYTma4ziHDvP02F6TPfW91iNKWAvvUQGs",
  authDomain: "olx-react-61045.firebaseapp.com",
  projectId: "olx-react-61045",
  storageBucket: "olx-react-61045.appspot.com",
  messagingSenderId: "962304398825",
  appId: "1:962304398825:web:5b579cf92a3a609555e778"
};

export default firebase.initializeApp(firebaseConfig)