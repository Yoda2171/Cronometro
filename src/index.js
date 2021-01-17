import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';
import Contador from "./Contador"

let numero = 0
setInterval(() => {
  numero++;
  let cinco = Math.floor(numero/100000)
  let cuatro = Math.floor(numero/10000)
  let tres = Math.floor(numero/1000)
  let dos = Math.floor(numero/10)
  let uno = Math.floor(numero/1)

  ReactDOM.render(
    <React.StrictMode>
      <Contador contador5 ={cinco} contador4 ={cuatro} contador3 ={tres} contador2 ={dos} contador1 ={uno}
       />
    </React.StrictMode>,
    document.getElementById('root')
  );

}, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
