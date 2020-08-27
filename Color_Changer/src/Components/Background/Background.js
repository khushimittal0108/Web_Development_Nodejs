import React from 'react';
import './Style.css';
import Colorbox from '../Colorbox/Corobox';

class Background extends React.Component{

    constructor(props){
        super(props);
        this.state={
            selectedColor:'#ffffff'
        }
    }

    changeBackgroundColor =(event) => {
        this.setState({
            selectedColor:event.target.value
        })
        

    };

    //@override method
    render = () => {
        return (
            <div style={{backgroundColor:this.state.selectedColor}} className="back-comp">

                <Colorbox onChange={this.changeBackgroundColor} currentColor={this.state.selectedColor} />

            </div>
        );
    };
}

export default Background;