import React from "react";
import{Link , useHistory} from 'react-router-dom';
import {Navbar , Nav , Container , Button} from 'react-bootstrap';
import { LogoutOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';


const CustomNavbar = () => {
    const history = useHistory();

    const handaleLogout = () =>{
        history.push('/logout');
    };

    return(
        <div>THis is Nav Bar</div>
    )
}

export default CustomNavbar