import React from 'react';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contador(props){
    return(
        <div className="container btn-lg bg-success text-center"> 
        <div className="d.inline btn btn-lg btn-secondary"><i class="far fa-clock"></i></div>
        <div className="d.inline btn btn-lg btn-secondary">{props.contador5 %10}</div>
        <div className="d.inline btn btn-lg btn-secondary">{props.contador4 %10}</div>
        <div className="d.inline btn btn-lg btn-secondary">{props.contador3 % 10}</div>
        <div className="d.inline btn btn-lg btn-secondary">{props.contador2 % 10}</div>
        <div className="d.inline btn btn-lg btn-secondary">{props.contador1 % 10}</div>
       </div>
    )
}
Contador.propTypes = {
    contador1: PropTypes.number,
    contador2: PropTypes.number,
    contador3: PropTypes.number,
    contador4: PropTypes.number,
    contador5: PropTypes.number
};



export default Contador;