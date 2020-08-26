import React from 'react';
import './style.css';
import Brick from '../Brick/brick.js';

class Wall extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            bricks: [1,2,3,4]//initial bricks
        }

    }

    addMoreBricks = () => {
        //copying old data
        const newBricksArray = [...this.state.bricks ]
        //add new data
        newBricksArray.push(newBricksArray.length+1)
        //this.state.bricks.push(5)

        //updating new data
        this.setState({
            bricks:newBricksArray
        })

    }

    onBrickClick = (num) =>{
        window.alert('You Clicked on Brick '+num)
    }

    //@override method 
    //abstract method
    //Retuns what is to be displayed
    render = () => {
        return(
            <div className="wall-container">
            {
                this.state.bricks.map((brick) => {
                    return <Brick onClick={this.onBrickClick} key={brick} name={brick}/>
                })

            }

            <button className='button-s' onClick={this.addMoreBricks}>Add More</button>

            </div>
        );

    };
}

export default Wall;