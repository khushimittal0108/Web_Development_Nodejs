import React from 'react';
import './style.css'

class FormData extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Uname:"",
            Uemail:"",
            Uphone:"",
            Ugender:"",
            Upassword:""
        };
    }

    onNameChange=(event) => {
        this.setState({
            Uname: event.target.value
        })
    }

    onEmailChange=(event) => {
        this.setState({
            Uemail:event.target.value
        })
    }

    onPhoneChange=(event) => {
        this.setState({
            Uphone:event.target.value
        })
    }

    onGenderChange=(event) => {
        this.setState({
            Ugender:event.target.value
        })
    }

    onPasswordChange=(event) => {
        this.setState({
            Upassword:event.target.value
        })
    }

    onSubmitBtn = () => {

        //validation of Phone number
        if(this.state.Uphone === '' ||
        this.state.Uphone.length!=10){
            window.alert('Invalid Phone number:')
            return ;
        }

        window.alert(`
            Name : ${this.state.Uname}
            Email : ${this.state.Uemail}
            Phone : ${this.state.Uphone}
            Gender: ${this.state.Ugender}
            Password: ${this.state.Upassword}`
        )

        this.clearFields();
    }

    clearFields = () =>{
        this.setState({
            Uname:"",
            Uemail:"",
            Uphone:"",
            Ugender:"",
            Upassword:""
        })
    }

    render = () => {
        return(
            <div className='form-comp'>
                <h3 className='title'>--------USER FORM--------</h3>
                <input 
                onChange={this.onNameChange} 
                value={this.state.Uname}
                className='input-style' 
                type='text' 
                placeholder="Enter Name" />

                <input 
                onChange={this.onEmailChange} 
                value={this.state.Uemail}
                className='input-style' 
                type='email' 
                placeholder="Enter Email" />

                <input 
                onChange={this.onPhoneChange} 
                value={this.state.Uphone}
                className='input-style' 
                type='text' 
                placeholder="Enter Phone Number" />

                <select 
                onChange={this.onGenderChange} 
                value={this.state.Ugender}
                className='input-style'>
                    <option>Choose Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>

                <input 
                onChange={this.onPasswordChange} 
                value={this.state.Upassword}
                className='input-style' 
                type='password' 
                placeholder="Enter Password"/>
                
                <button 
                onClick={this.onSubmitBtn}
                className='submitbtn'>Submit</button>


            </div>

        )
    }
}
export default FormData;