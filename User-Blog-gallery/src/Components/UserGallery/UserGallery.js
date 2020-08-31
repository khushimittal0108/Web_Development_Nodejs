import React from 'react';
import './style.css';
import UserCard from '../UserCard/UserCard';

class UserGallery extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            currentpage:0,
            isloading: false
        }
    }

    //lifecycle method of react called once after the first render method 
    componentDidMount=()=>{
        this.fetchUsers();
    }

    fetchUsers = () => {

        //fetch users data from API
        const pagetofetch = this.state.currentpage+1

        const url=`https://reqres.in/api/users?page=${pagetofetch}`

        //updating loading status
        this.setState({
            isloading: true
        })

        //fetching data
        fetch(url,{
            method:'GET'
        }).then((response)=>{
            return response.json()
        }).then((result)=>{
            const allUsers= [...this.state.users,...result.data]
            //updating user list
            this.setState({
                users:allUsers,
                currentpage:pagetofetch,
                isloading: false
            })
        }).catch(error=>{
            this.setState({
                isloading: false
            })
        })

    }

    render= () => {
        return (
        <div className='main-cont'>
            <p className='title'>-----User Gallery-----</p>
            <div className='imgcard'>
                {this.state.users.map(user=>{
                    return(
                        <UserCard 
                        profilepic = {user.avatar}
                        firstname = {user.first_name}
                        lastname={user.last_name}
                        email={user.email}
                        key={user.id}/>
                    )
                })}
            </div>
            {this.state.isloading?(
                <span>Loading</span>
            ):
            <button 
            className='loadmore'
            onClick={this.fetchUsers} 
            disabled={this.state.currentpage>=2}>
                Load More
                </button>}
        </div>
        )
    }
}

export default UserGallery;