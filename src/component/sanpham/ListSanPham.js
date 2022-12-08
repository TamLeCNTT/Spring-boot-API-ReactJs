import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {toast } from 'react-toastify';
import SanphamService from "../service/SanphamService";
import role from "../service/Role";
import Pagination from "react-js-pagination";
// import { Button } from "react-bootstrap";
class ListSanPham extends React.Component{
    state={
        listsps:[],
        activePage: 15
       
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    
   async componentDidMount(){

    let res=await SanphamService.getlist();
    this.setState({
        listsps:res.data
    })
    console.log(this.state.listsps)
   }
   ChiTietSanPham=(id)=>{
  this.props.history.push(`/sanpham/chitiet/${id}`)
  console.log(id)
  

  }
  Themsanpham=()=>{
    if(role()>0){
        this.props.history.push(`/sanpham/them`)
    }
    else
     toast.error("Bankhong co qyen")
    
  }
  Xoa=(id)=>{
    SanphamService.deletesanpham(id).then( res => {
          this.setState({listsps: this.state.listsps.filter(employee => employee.id_SanPham !== id)});
          console.log(res)
  
      }).catch(err => {
         toast.error("Toon ftai khoa na")
          console.log(err);
      });
     }

//  componentDidMount(){
//     axios.get('https://reqres.in/api/users?page=1')
//     .then(res=>{
//         console.log(res.data)
//     })
//  }
Sua=(id)=>{
    if(role()>0){
    this.props.history.push(`sanpham/${id}`)
}
else
 toast.error("Bankhong co qyen")
   }
   Nhapsanpham=()=>{
    this.props.history.push(`sanpham/nhaphang`)
   }
 
    render(){
       let {listsps}=this.state;
        
    return(
        <div>
         
           <div className = "row">
           <button onClick={ () => this.Themsanpham()} className="btn btn-info">Them </button> 
           <button onClick={ () => this.Nhapsanpham()} className="btn btn-info">Nhap hang </button> 
                    
                    
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> STT</th>
                                <th> Ten LSP</th>
                                <th> Hinh Anh</th>
                                <th>Mo ta</th>
                                <th> Loai san pham</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                 listsps && listsps.length>0 &&
                                this.state.listsps.map(
                                    (item,index) => //{return(
                                    <tr key = {index}>
                                         <td> {index+1} </td>   
                                         <td> {item.tenSanPham}</td>
                                         <td> {item.hinhAnh}</td>
                                         <td> {item.moTa}</td>
                                         <td> {item.loaiSP.tenLSP}</td>
                                         <td>
                                         <button onClick={ () => this.Sua(item.id_SanPham)} className="btn btn-info">Sửa </button> 
                                       <button onClick={ () => this.ChiTietSanPham(item.id_SanPham)} className="btn btn-info">Detail </button> 
                                       <button onClick={ () => this.Xoa(item.id_SanPham)} className="btn btn-info">Xoa </button> 
                                         </td>
                                    </tr>
                              
                                )
                            }
                        </tbody>
                    </table>

<div  className="pagination-container">

                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={2}
                        totalItemsCount={15}
                        pageRangeDisplayed={10}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"

                        />
</div>

             </div>
                
        </div>
    )
 }
}
export default withRouter(ListSanPham)