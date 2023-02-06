import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// Higher-Order Components

// function App(props) {
//   return (
//     <h1>{props.saludo}, {props.nombre}</h1>
//   )
// }

// function whitSaludo(WrappedComponent) {
//   // el ultimo return tiene que ser si o si un ocmponente de React
//   // recive el ('Whenas por parametro en WrappedComponentWhitSaludo')
//   return function WrappedComponentWhitSaludo(saludo) {
//     return function ComoponenteDeVerdad(props) {
//       return ( // retorno de componente de React
//         // Debemos enviar las props de nuevo para renderizar en App
//         <>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Estamos acompañando al WrappedComponent</p>
//         </>
//       )
//     }
//   }
// }

// const AppWhitSaludo = whitSaludo(App)('Whenas')
// // ('Whenas') es el parametro que recive WrappedComponentWhitSaludo(saludo)

// ReactDOM.render(
//   <AppWhitSaludo nombre="Franco" />,
//   document.getElementById('root')
// );

