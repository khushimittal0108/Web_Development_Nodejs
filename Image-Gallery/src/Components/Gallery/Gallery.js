import React from 'react';
import './style.css'
import ImageCard from '../ImageCard/Imagecard';

class Gallery extends React.Component{

    constructor(props){
        super(props);
        this.state={
            images:[],
            currentAdd:''
        }
    }

    onAddressChange = (event) => {
        this.setState({
            currentAdd: event.target.value
        })
    }

    onAddImage = (event) => {

        //validation
        if(this.state.currentAdd===''){
            return;
        }

        const newImages =[...this.state.images]
        newImages.push(this.state.currentAdd)

        this.setState({
            images: newImages,
            currentAdd: ''
        })
    }

    render = () => {
        return(
            <div className='rootdiv'>
                <p className='title'>-----Image Gallery-----</p>
                <div className='input-box'>
                    <input 
                    onChange={this.onAddressChange}
                    value={this.state.currentAdd}
                    placeholder='Enter the URL' 
                    type='text'/>
                    <button onClick={this.onAddImage}>Add</button>
                </div>
                <div className='imageshow'>
                {
                    this.state.images.map((url)=> {
                        return <ImageCard 
                        key={`${url}-${Math.random()*10}`} 
                        imageUrl={url}/>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Gallery; 