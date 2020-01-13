import React from 'react';
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

<nav>
        <img className="logo-nav" src={logo} alt="logo-tech101" />
        <div>
          <a href="http://tech101.io/" target="_blank" rel="noopener noreferrer">
            Nosotros
          </a>
          <a href="http://tech101.io/" target="_blank" rel="noopener noreferrer">
            Reclutamiento
          </a>
          <a href="http://tech101.io/" target="_blank" rel="noopener noreferrer">
            Contacto
          </a>
        </div>
      </nav>
      <section id="hero">

      
      <div id="hero-content"> 
        <h2 className="subtitle-hero md-padding-bottom">
          Compartiendo la tecnología
        </h2>
        <h3 className="title-hero md-padding-bottom">
          PARA ROMPER LA BRECHA DIGITAL
        </h3>
        <button className="button-hero">
          Contactanos
        </button>
        <div>
          <div className="hero-social-icons x-lg-margin-top"> 
            <div>
              <a href="https://www.facebook.com/somostech101" target="_blank" rel="noopener noreferrer">
                <FontAwesome
                  name="facebook"
                  size="2x"
                />
              </a>
            </div>

            <div>
            <a href="https://www.facebook.com/somostech101" target="_blank" rel="noopener noreferrer">
              <FontAwesome
                name="instagram"
                size="2x"
              />
            </a>
            </div>
            
            <div>
              <a href="https://www.facebook.com/somostech101" target="_blank" rel="noopener noreferrer">
                <FontAwesome
                  name="twitter"
                  size="2x"
                />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/somostech101" target="_blank" rel="noopener noreferrer">
                <FontAwesome
                  name="youtube"
                  size="2x"
                />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/somostech101" target="_blank" rel="noopener noreferrer">
                <FontAwesome
                  name="medium"
                  size="2x"
                />
              </a>
            </div>
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
