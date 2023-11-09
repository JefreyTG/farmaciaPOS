import firebase from '../node_modules/@firebase'
import 'firebase/firestore';

const firebaseConfig = {
  // Tu configuración de Firebase aquí
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
