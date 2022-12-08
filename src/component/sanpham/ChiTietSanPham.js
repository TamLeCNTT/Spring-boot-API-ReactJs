import React from "react";
import {withRouter} from "react-router-dom";
import SanphamService from "../service/SanphamService";
import axios from "axios";
import '../loaisanpham/loaisanpham.scss'
class ChiTietSanPham extends React.Component{
    state={
        sanpham:{},
        loaiSP:{}
    }
   async componentDidMount(){
        if (this.props.match.params && this.props.match){
           let id= this.props.match.params.id;
           let res=await SanphamService.getsanphamId(id);
       // console.log("check res",res)
        this.setState({
            sanpham:res.data &&res ?res.data:{},
            loaiSP:res.data.loaiSP
        })
        }
     console.log("check state",this.state.sanpham)
        
    }
    trove=()=>{
        this.props.history.push('/sanpham')
    }
    render(){
        let {sanpham,loaiSP}=this.state;
        // console.log("check state",user)
        
        return(
            <div className="parent-container">
                 <button onClick={ () => this.trove()} className="btn btn-info">quay lai </button>
                <div className="child">
                 Chi tiet san pham {sanpham.tenSanPham}
                </div>
                <div className="child">
                    <table className = "table table-striped table-bordered">
                        <thead>
                        <tr>
                            <td>
                               Tên :
                            </td>
                            <td>
                            {sanpham.tenSanPham}
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Loai san pham:
                            </td>
                            <td>
                       {loaiSP.tenLSP}
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Gia :
                            </td>
                            <td>
                            {sanpham.giaBan }
                            </td>
                        </tr>
                        <tr>
                            <td>
                               So Luong Kho :
                            </td>
                            <td>
                            {sanpham.soLuongKho}
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Hinh Anh :
                            </td>
                            <td>
                       {sanpham.hinhAnh}
                            </td>
                        </tr>

                        </thead>
                    </table>

                </div>
                
            </div>
            
        )
    }
}
export default withRouter(ChiTietSanPham)