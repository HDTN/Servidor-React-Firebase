import React from 'react';
import './ServerIntro.css';

import illustration from "../assets/intro_illustration.png";

export default () => {
    return (
        <div className="serverIntro" >
            <img src={illustration} alt="Ilustração inicial" />
            <h1>Selecione uma pasta para visualizar.</h1>
        </div>
    );
}