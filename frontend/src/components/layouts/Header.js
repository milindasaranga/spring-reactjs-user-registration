import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

function Header(){
    return (
    <header style={header}>
        <MenuIcon/>
        <h2>User Registration</h2>
        <p></p>
    </header>
    );
}

const header = {
background:"#8B8E8E",
color:"#fff",
padding:"10px",
display:"flex",
alignItems:"center",
justifyContent:"space-between"
}

export default Header;