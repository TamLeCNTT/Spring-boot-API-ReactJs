import React, { Component } from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";
import LoaiSanPhamService from '../service/LoaiSanPhamService';
class ThemLoaiSanPham extends Component {
   state = {
  
      
           tenLSP: '',
            hinhAnh: ''
        
        }
      
    

    // step 3

    async componentDidMount(){
       
       // console.log("check res",res)
       if(this.props.match.params.id=== 'them'){
        return
    }else{
        if (this.props.match.params && this.props.match){
            let id= this.props.match.params.id;
            let res=await LoaiSanPhamService.getLoaiSanPhamId(id)
        
            this.setState(
                {tenLSP: res.data.tenLSP,
                hinhAnh: res.data.hinhAnh,
               
            });
          
             }        
        }
   
        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
       

      
        if (this.props.match.params.id==='them'){
            let loaisanpham = {tenLSP: this.state.tenLSP, hinhAnh: this.state.hinhAnh};
            console.log('employee => ' + JSON.stringify(loaisanpham));
        LoaiSanPhamService.createLoaiSanPham(loaisanpham).then( res => {
            console.log(res)
            this.props.history.push('/loaisanpham')

        });}
        else{
            let loaisanpham = {id_LoaiSP:this.props.match.params.id,tenLSP: this.state.tenLSP, hinhAnh: this.state.hinhAnh};
            console.log('employee => ' + JSON.stringify(loaisanpham));
           LoaiSanPhamService.updateLoaiSanPham(loaisanpham).then( res => {
                console.log(res)
            this.props.history.push('/loaisanpham')

        });
        }

     
           
    }
    
    changeTenLSPHandler= (event) => {
        this.setState({tenLSP: event.target.value});
      
    }

    changehinhAnhHandler= (event) => {
        this.setState({hinhAnh: event.target.value});
    }

    // changeEmailHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancels=()=>{
        this.props.history.push('/loaisanpham');
    }

    getTitle(){
        if(this.props.match.params.id === 'them'){
            return <h3 className="text-center">Thêm Loại sản phẩm</h3>
        }else{
            return <h3 className="text-center">Cập nhật loại sản phẩm</h3>
        }
    }
    render() {
       
        return (
            <div>
                <br></br>
                   <div className = "container">
                 
                        <div className = "row">
                          
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Tên loại sản phẩm: </label>
                                            <input placeholder="Ex:Áo thun" name="firstName" className="form-control" 
                                             value={this.state.tenLSP} onChange={this.changeTenLSPHandler}  />
                                        </div>
                                        <div className = "form-group">
                                            <label> Hình Ảnh </label>
                                            <input placeholder="Ex:Hinh anh" name="lastName" className="form-control" 
                                             value={this.state.hinhAnh} onChange={this.changehinhAnhHandler}  />
                                        </div>
                                        

                                        <button className="btn btn-success"onClick={this.saveOrUpdateEmployee} >Save</button>
                                        <button className="btn btn-danger" onClick={this.cancels}style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default withRouter(ThemLoaiSanPham)
