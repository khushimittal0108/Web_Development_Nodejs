import React from 'react';
import './style.css';

const UserCard =(props) =>{
    return(
        <div className='card'>
            <img src={props.profilepic} />
            <span>{props.firstname} {props.lastname}</span>
            <span>{props.email}</span>
        </div>
    )
}
export default UserCard;