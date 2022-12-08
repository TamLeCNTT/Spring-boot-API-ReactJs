import React, { Component } from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";
import NguoidungService from '../service/NguoidungService';
import Nav from "../../layout/Nav";
class Logout extends Component {
   

    async componentDidMount(){
        // localStorage.setItem('jwt','');
        // localStorage.setItem('user',null);
      
        localStorage.removeItem("user")
        localStorage.removeItem("jwt")  
        localStorage.removeItem("tendangnhap")
       // Nav.render()
        //localStorage.clear()
        this.props.history.push('/')
   
        
    }


    render() {
       
        return (
            <div>
            </div>
        )
    }
}

export default withRouter(Logout)
