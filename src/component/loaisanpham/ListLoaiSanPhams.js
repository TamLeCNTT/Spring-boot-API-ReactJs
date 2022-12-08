import React from "react";
import axios from "axios";
import {toast } from 'react-toastify';
import {withRouter} from "react-router-dom";
import LoaiSanPhamService from "../service/LoaiSanPhamService";
import authHeader from "../service/JwtService";
import './loaisanpham.scss'
import role from "../service/Role";
// import { Button } from "react-bootstrap";
class ListLoaiSanPhams extends React.Component{
    state={
        listlsps:[]
    }
   async componentDidMount(){

    let res=await LoaiSanPhamService.getlist();
    this.setState({
        listlsps:res.data
    })
    console.log("check",this.state.listlsps)
   }
   Themloaisanpham=()=>{
   
    if (authHeader())
    this.props.history.push('loaisanpham/them')
    else
    toast.error('Ban khong co quyen')
   }
   Sua=(id)=>{
    if (authHeader())
    this.props.history.push(`loaisanpham/${id}`)
    else
    toast.error('Ban khong co quyen')

   }
   Xoa=(id)=>{
        if (authHeader()){
            LoaiSanPhamService.deleteLoaiSanPham(id).then( res => {
                this.setState({listlsps: this.state.listlsps.filter(employee => employee.id_LoaiSP !== id)});
                console.log(res)
        
            }).catch(err => {
               toast.error("Toon ftai khoa na")
                console.log(err);
            });
        
             }
        else
        toast.error('Ban khong co quyen')
  





   }
//    detailUser=(id)=>{
//     this.props.history.push(`/user/${id}`)

//   }
//  componentDidMount(){
//     axios.get('https://reqres.in/api/users?page=1')
//     .then(res=>{
//         console.log(res.data)
//     })
//  }
 
 
    render(){
       let {listlsps}=this.state;
        
    return(
        <div>
         
           <div className = "row">
           <button onClick={ () => this.Themloaisanpham()} className="btn btn-info" style={{width:"100px",textAlign:"center"}}>Them </button> 
                    
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> STT</th>
                                <th> Ten LSP</th>
                                <th> Hinh Anh</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                 listlsps && listlsps.length>0 &&
                                this.state.listlsps.map(
                                    (item,index) => //{return(
                                    <tr key = {index}>
                                         <td> {index+1} </td>   
                                         <td> {item.tenLSP}</td>
                                         <td> {item.hinhAnh}</td>
                                         <td>
                                       <button onClick={ () => this.Sua(item.id_LoaiSP)} className="btn btn-info">Sửa </button> 
                                       <button onClick={ () => this.Xoa(item.id_LoaiSP)} className="btn btn-info">Xoa </button> 
 
                                         </td>
                                    </tr>
                              
                                )
                            }
                        </tbody>
                    </table>

             </div>
                
        </div>
    )
 }
}
export default withRouter(ListLoaiSanPhams)