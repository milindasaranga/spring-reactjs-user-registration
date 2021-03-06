import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class UserInfo extends Component{

    infoStyle = () =>{
       return {
        backgroundColor: (this.props.user.id%2) == 0? '#E1E7E7' :'',
        padding:'10px',
        borderBottom: '1px #ccc dotted',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        justifyItems: 'flex-start',
       }
    }

    render(){
        const {id} =this.props.user;
        console.log("user info" + id);
        return (
            <div style={this.infoStyle()}>
                <div style={iconUsername}>
                    <AccountCircleIcon style={{color:"#138a04", margin:"0px 10px 0px 0px"}}/>
                    <p>{this.props.user.firstName}</p>
                </div>
                <p>{this.props.user.lastName}</p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.username}</p>
                <div style={buttons}>
                    <IconButton color="secondary" onClick={this.props.deleteUser.bind(this,id)}>
                    <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}

const iconUsername = {
    display: 'flex',
    justifyContent:'space-between'
}

const buttons = {
    display:'flex'
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserInfo;