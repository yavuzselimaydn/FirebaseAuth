import firebase from 'firebase/compat/app';  //aut islemi icin gereken importlar
import 'firebase/compat/auth';

const firebaseConfig = {                     //firebasin verdigi keyler
  apiKey: "AIzaSyBs0MXxfZEKaMH7LBUWNBo7bw1PeG0n2mU",
  authDomain: "login-4bdb3.firebaseapp.com",
  projectId: "login-4bdb3",
  storageBucket: "login-4bdb3.appspot.com",
  messagingSenderId: "788540231736",
  appId: "1:788540231736:web:93b32a5782edd78dac96cd"
};

if(!firebase.apps.length){                    //eger firabase initiliaze edilmisse bir daha etmemek icin
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();          //auth fonksiyonunu disari actım
