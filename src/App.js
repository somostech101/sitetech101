import React from 'react';
import FontAwesome from 'react-fontawesome'
import ernestoCharla from './img/talentland-ernesto.jpg'
import logoNovenoBit from './img/9no.jpg'

import NavComponent from './components/NavComponent';
import ContactComponent from './components/ContactComponent';






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

<NavComponent />


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
          </div>
        </div>
      </section>

      <section className="full-width center-center x-lg-margin-top">
        <div className="us-container">
          <div>
            <h1>
              Tech 101
            </h1>
            <p>
              lorem ipsum
            </p>
          </div>
          <div>
            <img src={ernestoCharla} className="img-us"/>
          </div>
        </div>
      </section>

      <section className="full-height-vh center-center">
        <div>
        <span className="full-width center-center x-lg-margin-bottom x-lg-margin-top">
          <h2 className="section-title">Nuestra Comunidad</h2>
        </span>

        <div className="center-center full-width">
          <div className="comunity-info">
            <div className="center-center icon-comunity-info sm-margin-bottom">
              <FontAwesome
                  name="users"
                  size="5x"
              />  
            </div>
            <p className="title-icon-comunity-info sm-margin-bottom">
            Social Media
            </p>
            <p className="general-text"> 
              En <b>Tech 101</b> conocemos y usamos las plataformas digitales para una mayor covertura 
              para la difusión de la información para apoyar a los interesados en el mundo tecnologico
            </p>
          </div>
          <div className="comunity-info">
            <div className="center-center icon-comunity-info sm-margin-bottom">
                <FontAwesome
                name="users"
                size="5x"
                />  
            </div>
            <p className="title-icon-comunity-info sm-margin-bottom">
              Reuniones
            </p>
            <p className="general-text"> 
              Aunque la tecnología es parte crucial de la comunidad, no se debe dejar de lado el contacto humano, 
              es por eso que nos reunimos cada mes para compartir nuestra pasión por la tecnología
            </p>
          </div>
          <div className="comunity-info">
          <div className="center-center icon-comunity-info sm-margin-bottom">
              <FontAwesome
              name="users"
              size="5x"
              />  
          </div>
          <p className="title-icon-comunity-info sm-margin-bottom">
            Reclutamiento
          </p>
          <p className="general-text"> 
            Conectamos al talento digital con empresas de necesidades modernas, 
            ¿Buscas trabajo o necesitas nuevos colaboradores? ¡Envianos un mensaje!
          </p>
        </div>
        </div>
        </div>
      </section>


      <section className="x-lg-margin-top center-center">
        <div>
        <span className="full-width center-center x-lg-margin-bottom x-lg-margin-top">
          <h2 className="section-title">Aliados</h2>
        </span>

        <div className="vertical-center full-width">
          <div className="ally-info">

            <p className="title-icon-comunity-info sm-margin-bottom">
            </p>
          </div>
          <div className="ally-info">
          <div className="center-center icon-comunity-info sm-margin-bottom">
              <img src={logoNovenoBit} className="logos-aliados-size"/>
            </div>
            <p className="title-icon-comunity-info sm-margin-bottom">
              Racoons
            </p>
          </div>
          <div className="ally-info">
          <div className="center-center icon-comunity-info sm-margin-bottom">
              <img src={logoNovenoBit} className="logos-aliados-size"/>
            </div>
          <p className="title-icon-comunity-info sm-margin-bottom">
            GDG UNAM
          </p>
        </div>
        </div>
        </div>
      </section>

      <ContactComponent/>



    </div>

    
  );
}

export default App;
