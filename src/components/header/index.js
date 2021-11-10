import React from 'react';
import classes from './header.module.css';
import logo from '../../assets/logo192.png';

class Header extends React.Component {
    render() {
        return (
            <div className = {classes.header_container}>
                <img src={logo} alt="" />
                <h3>React Car Dealership</h3>
            </div>
        );
    }
}

export default Header;
