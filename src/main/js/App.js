import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../../../frontend/src/components/layouts/Header";
import UserRegistration from '../../../frontend/src/components/UserRegistration';
import Users from '../../../frontend/src/components/Users';
import axios from 'axios';

export class App extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[
            ]
        }
    }

    componentDidMount(){
        axios.get("/user/all")
            .then((response)=>{
            console.log(response);
            this.setState({users:response.data})
            });
    }


    createUser = (newUser) =>{
        axios.post("/user/save",newUser)
            .then((response)=>{
            console.log(response);
            this.setState({users:[...this.state.users,response.data]})
            });
    }

    deleteUser = (id) =>{
        axios.delete(`/user/${id}`)
            .then((response)=>{
                this.setState({users:[...this.state.users.filter(
                user=>user.id !== id
                )
                ]})
            })
    }

    render() {
        return (
            <div>
                <Header/>
                <UserRegistration createUser={this.createUser} />
                <Users users={this.state.users} deleteUser={this.deleteUser} />
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));