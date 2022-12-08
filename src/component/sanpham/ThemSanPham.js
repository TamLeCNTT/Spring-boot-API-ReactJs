import React, { Component } from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";
import SanphamService from '../service/SanphamService';
import LoaiSanPhamService from '../service/LoaiSanPhamService';
class ThemSanPham extends Component {
   state = {
           tenSanPham: '',
           moTa:'',
            hinhAnh: '',
            giaBan:'',
            soLuongKho:'',
            soSao:'',
            loaiSP:{},
            listLSP:[],
            idlsp:'1'
        
        }
      
    

    // step 3

    async componentDidMount(){
        console.log("voo dis maouse")
        let listlsp=await LoaiSanPhamService.getlist();
        this.setState({
            listLSP:listlsp.data
        })
        console.log(this.state)
       
   // console.log("check res",res)
   if(this.props.match.params.id=== 'them'){
   
    return
    

}else{
    if (this.props.match.params && this.props.match){
        let id= this.props.match.params.id;
        let res=await SanphamService.getsanphamId(id)
        
        this.setState(
            {tenSanPham: res.data.tenSanPham,
            hinhAnh: res.data.hinhAnh,
            moTa:res.data.moTa,
            giaBan:res.data.giaBan,
            soLuongKho:res.data.soLuongKho,
            soSao:res.data.soSao,
            loaiSP:res.data.loaiSP
            
           
        });
        this.setState({
            idlsp:this.state.loaiSP.id_LoaiSP
        })
        console.log(this.state.idlsp)
      
         }        
    }
        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        console.log("cechk id",this.state.idlsp)
        let id=this.state.idlsp===''?1:this.state.idlsp;
        LoaiSanPhamService.getLoaiSanPhamId(id).then(res=>{
            console.log("cechk id",id)
            console.log("check res",res.data)
            this.setState({
                loaiSP: res.data});
     });
     
     if (this.props.match.params.id==='them'){
        console.log("check state truoc luu",this.state.idlsp)
        let sanpham = {tenSanPham: this.state.tenSanPham, hinhAnh: this.state.hinhAnh,moTa:this.state.moTa,loaiSP:this.state.loaiSP};
        console.log('employee => ' + JSON.stringify(sanpham));
        SanphamService.createsanpham(sanpham).then( res => {
        console.log(res)
        this.props.history.push('/sanpham')

    });
}
    else{
        console.log("cehcl lsp",this.state.loaiSP)
        
        let sanpham = {id_SanPham:this.props.match.params.id,tenSanPham: this.state.tenSanPham, hinhAnh: this.state.hinhAnh,moTa:this.state.moTa,loaiSP:this.state.loaiSP};
        console.log('employee => ' + JSON.stringify(sanpham));
        console.log(this.state.loaiSP)
        SanphamService.updatesanpham(sanpham).then( res => {
            console.log(res)
      this.props.history.push('/sanpham')

    });
    }
       
       

    
    }
    
    changeTenSPHandler= (event) => {
        this.setState({tenSanPham: event.target.value});
      
    }
     
    changemoTaHandler= (event) => {
        this.setState({moTa: event.target.value});
      
    }
    changegiaBanHandler= (event) => {
        this.setState({giaBan: event.target.value});
      
    }

    changehinhAnhHandler= (event) => {
        this.setState({hinhAnh: event.target.value});
    }
    changeLSPHandler= (event) => {
        console.log(event.target.value)
       this.setState({idlsp: event.target.value});
       LoaiSanPhamService.getLoaiSanPhamId(event.target.value).then(res=>{
        
        console.log("check res",res.data)
        this.setState({
            loaiSP: res.data});
 });
       
    }

    // changeEmailHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancels=()=>{
        this.props.history.push('/sanpham');
    }

    getTitle(){
        if(this.props.match.params.id === 'them'){
            return <h3 className="text-center">Thêm Loại sản phẩm</h3>
        }else{
            return <h3 className="text-center">Cập nhật loại sản phẩm</h3>
        }
    }
    gia=()=>{
        if (this.props.match.params.id!=='them'){
            return(
                <div className = "form-group">
                <label>Gia: </label>
                <input placeholder="Ex:Áo thun" name="giaban" className="form-control" 
                 value={this.state.giaBan} onChange={this.changegiaBanHandler}  />
            </div>
            )
        }
        else
            return
    }
    render() {
       let listLSP=this.state.listLSP
    
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
                                             value={this.state.tenSanPham} onChange={this.changeTenSPHandler}  />
                                        </div>
                                        <div className = "form-group">
                                            <label> Hình Ảnh </label>
                                            <input placeholder="Ex:Hinh anh" name="lastName" className="form-control" 
                                             value={this.state.hinhAnh} onChange={this.changehinhAnhHandler}  />
                                        </div>
                                        {/* {
                                        this.gia()
                                            
                                        } */}
                                            <div className = "form-group">
                                            <label>Mo Ta: </label>
                                            <input placeholder="Ex:Áo thun" name="firstName" className="form-control" 
                                             value={this.state.moTa} onChange={this.changemoTaHandler}  />
                                        </div>
                                        <div className = "form-group">
                                            <label> Loại sản phẩm </label>
                                            <select className="form-control" onChange={this.changeLSPHandler} value={this.state.idlsp}>
                                                {
                                                    listLSP && listLSP.length>0 &&
                                                    listLSP.map((item,index)=>{
                                                        return(
                                                            <option key={index} value={item.id_LoaiSP}>{item.tenLSP}</option>
                                                        )
                                                    })

                                            
                                                   
                                                }
                                                    </select>
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

export default withRouter(ThemSanPham)
