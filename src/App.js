import React from 'react';
import './App.css';
import logo from './img/logo-tech.png'
import FontAwesome from 'react-fontawesome'




// import * as firebase from 'firebase';
// const config = {
//   apiKey: "ENTER YOURS HERE",
//   authDomain: "ENTER YOURS HERE",
//   databaseURL: "ENTER YOURS HERE",
//   projectId: "ENTER YOURS HERE",
//   storageBucket: "ENTER YOURS HERE",
//   messagingSenderId: "ENTER YOURS HERE"
// }
// firebase.initializeApp(config);
// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos")


// Initialize Cloud Firestore through Firebase
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// firebase.initializeApp({
//   apiKey: "AIzaSyD4jPXffnMqK237iMzDtIj7jyMFvaWwQYQ",
//   authDomain: "tech101-9266f.firebaseapp.com",
//   projectId: "tech101-9266f"
// });

// var db = firebase.firestore();

//   console.log(db);

// function setData(){

//   // let docRef = db.collection('users').doc('alovelace3');

//   // let setAda = docRef.set({
//   //   first: 'Adaaa',
//   //   last: 'Lovelace2',
//   //   born: 1817
//   // });
//   const saludo = "Hola mundo!!!XD!!!";
//   console.log(saludo);    
// }


function App() {
  return (
    <div>


      <section id="hero">

      <nav>
        <img className="logo-nav" src={logo} alt="logo-tech101" />
        <div>
          <a>
            Nosotros
          </a>
          <a>
            Reclutamiento
          </a>
          <a>
            Contacto
          </a>
        </div>
      </nav>
      <div id="hero-content"> 
        <h2 className="subtitle-hero">
          Compartiendo la tecnología
        </h2>
        <h3 className="title-hero">
          PARA ROMPER LA BRECHA DIGITAL
        </h3>
        <button>
          Contactanos
        </button>
        <div>
          <div>
            <a href="https://www.facebook.com/somostech101" target="_blank">
              <FontAwesome
                className="super-crazy-colors"
                name="facebook"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
            <a href="https://www.facebook.com/somostech101" target="_blank">
              <FontAwesome
                className="super-crazy-colors"
                name="facebook"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
            <a href="https://www.facebook.com/somostech101" target="_blank">
              <FontAwesome
                className="super-crazy-colors"
                name="facebook"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>

          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </div>


      </section>

    </div>

    
  );
}

export default App;
