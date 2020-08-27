import React from 'react';
import './Style.css';
const Colorbox = (props) => {
    return(
    <div className="color-box">
        <h2>Choose a color</h2>
        <input type='color' onChange={props.onChange}/>
        <span>{props.currentColor}</span>
    </div>
    );
};

export default Colorbox;