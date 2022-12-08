import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {toast } from 'react-toastify';
import SanphamService from "../service/SanphamService";
import role from "../service/Role";
import { connect } from "react-redux";

// import { Button } from "react-bootstrap";
class SanPhamShow extends React.Component{
//     state={
//         listsps:[],
       
//     }
//    async componentDidMount(){

//     let res=await SanphamService.getlist();
//     this.setState({
//         listsps:res.data
//     })
//     console.log(this.state.listsps)
//    }
   ChiTietSanPham=(id)=>{
  this.props.history.push(`/sanpham/chitiet/${id}`)
  console.log(id)

  }
  addcard=(id)=>{
   
    console.log(this.props.dataRedux)
    let flag=0;
    let listsp=[]
    let id_nd=this.props.dataRedux.user.tenDangNhap;
    console.log(id_nd)
    if (this.props.dataRedux.sanpham.length>0){
       listsp=localStorage.getItem(`card${id_nd}`)?this.props.dataRedux.sanpham:[]
      
       listsp.map((item,index)=>{
        if (item.id===id){
         item.sl++;
         flag=1;
        }
       })
      console.log(listsp)
      
    }
    if (flag===0){
      let spnew={id:id,name:"quan",sl:1}
      listsp=[...listsp,spnew]
    }
    console.log(listsp)
   localStorage.setItem(`card${id_nd}`,JSON.stringify(listsp))
   console.log(localStorage.getItem(`card${id_nd}`))
    this.props.addcard(listsp)
    
  }
  
 
    render(){
      
        
    return(
      
         
           <div className = "row">
           <button onClick={ () => this.addcard(1)} className="btn btn-info" style={{width:"200px",marginRight:"10px"}}>San Pham 1 </button> 
           <button onClick={ () => this.addcard(3)} className="btn btn-info" style={{width:"200px"}}> san pham 2 </button>          

             </div>
                
        
    )
 }
}
const mapStateToProps=(state)=>{
  return{dataRedux:state}
}
const mapStateUser =(state)=>{
  return{datauser:state}
}
const mapDispatchToProps=(dispatch)=>{
   return{
    addcard:(listsp)=>dispatch({type:'ADD_CARD',payload:listsp}),
       
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SanPhamShow))