import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';

class Users extends Component{
    render(){
        return this.props.users.map((user)=>(
            <UserInfo user={user} key={user.id} deleteUser={this.props.deleteUser} />
        ));
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
}

export default Users;