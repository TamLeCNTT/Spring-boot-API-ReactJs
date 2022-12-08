import React from "react";
import './Nav.scss'
import authHeader from "../component/service/JwtService";
import { connect } from "react-redux";
import { Button,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import Register from "../component/home/Register";
import { Modal } from "react-bootstrap";
import {
    
    NavLink
  } from "react-router-dom";
class Nav extends React.Component{
state={
  statuss:localStorage.getItem('jwt'),

}
componentDidMount(){
    this.setState({
      statuss:localStorage.getItem('jwt'),
      show:false
    })
}
setshow=(status)=>{
this.setState({
  show:status
})
}
logout=()=>{
  console.log("dddd")
  this.props.logout()
}
render(){
  console.log("chdeck nav",this.props.dataRedux)
    return(
      <>
        <div className="topnav">
          <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/loaisanpham" activeClassName="active">
                    Loai san pham
                </NavLink>
                <NavLink to="/sanpham" activeClassName="active">
                    San Pham
                </NavLink>
                <NavLink to="/sanphamshow"  activeClassName="active">
                     San Pham show
                </NavLink>
                {  !this.props.dataRedux.user.id_Nguoidung ?
                  <>
                      <NavLink to="/user" activeClassName="active">
                      Dang ky
                      </NavLink>
                      <NavLink to="/dangnhap"  activeClassName="active">
                      Dang nhap
                      </NavLink>
                      </>
                      :
                      <>
                      <NavLink to="/dangxuat" onClick={()=>this.logout()} activeClassName="active">
                      Dang Xuat
                      </NavLink>
                      </>
                }
                <NavLink to="/dangxuat" onClick={()=>this.logout()} activeClassName="active">
                      card {
                        <sup> {this.props.dataRedux.sanpham.length>0 && this.props.dataRedux.sanpham.length}</sup>
                      }
                      </NavLink>
                      <NavLink to="/upload" onClick={()=>this.logout()} activeClassName="active">
                      uploadfile
                      </NavLink>
               
      
      
      </div>
      <div>
      <Button variant="primary" onClick={() => this.setshow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={this.state.show}
        onHide={() => this.setshow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          <h3 className="text-center">Dang ky tai khoan</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Register/>
        </Modal.Body>
      </Modal>
      </div>

      </>
    )
}
}
const mapStateToProps=(state)=>{
  return{dataRedux:state}
}


const mapDispatchToProps=(dispatch)=>{
   return{
       logout:()=>dispatch({type:'LOGOUT'}),
       
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Nav)