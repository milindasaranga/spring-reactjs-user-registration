import React, {Component} from 'react';
import PropTypes from "prop-types";

class UserRegistration extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName:'',
            email:'',
            username:'',
            password:''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        let newUser = this.state;
        this.props.createUser(newUser);

        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            username:'',
            password:''
        });
    }

render(){
    return (
           <form onSubmit={this.onSubmit}>
            <div style={{display:'flex'}}>
                <input type="text" name="firstName" placeholder="First Name" style={leftInput} value={this.state.firstName} onChange={this.onChange} />
            </div>
            <div style={{display:'flex'}}>
                <input type="text" name="lastName" placeholder="Last Name" style={leftInput} value={this.state.lastName} onChange={this.onChange} />
            </div>
            <div style={{display:'flex'}}>
                <input type="text" name="username" placeholder="Username" style={leftInput} value={this.state.username} onChange={this.onChange} />
            </div>
            <div style={{display:'flex'}}>
                <input type="text" name="password" placeholder="Password" style={leftInput} value={this.state.password} onChange={this.onChange} />
            </div>
            <div style={{display:'flex'}}>
                <input type="text" name="email" placeholder="email" style={leftInput} value={this.state.email} onChange={this.onChange} />
            </div>
            <input type="submit" value="Submit" className="btn" />
           </form>
           )
    }
}

const leftInput = {
    flex:'5px',
    padding:'5px',
    margin:'10px 10px 0px 0px'
}

const rightInput={
    flex:'5px',
    padding:'5px',
    margin:'10px 0px 0px 10px'
}

UserRegistration.propTypes={
    createUser:PropTypes.func.isRequired,
}

export default UserRegistration;