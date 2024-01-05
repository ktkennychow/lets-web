import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCawB0gvnHt6Cjje9wpdAxiy5pFEPqxtU',
  authDomain: 'lets-ec9cc.firebaseapp.com',
  projectId: 'lets-ec9cc',
  storageBucket: 'lets-ec9cc.appspot.com',
  messagingSenderId: '557788808414',
  appId: '1:557788808414:web:7d758ba519d52f7c0bee4f',
  measurementId: 'G-R827FG7GSW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
