import React from 'react';
import './style.css';

const Brick = (props) => {
    return(
        
        <div onClick={() => {props.onClick(props.name)}} className="Brick-comp">
            <span>{props.name}</span>
        </div>
    );
}
export default Brick;