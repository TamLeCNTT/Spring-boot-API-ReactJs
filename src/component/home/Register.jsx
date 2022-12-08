import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";
import NguoidungService from '../service/NguoidungService';
import DiaChiService from '../service/DiaChiService';


class Register extends Component {
    state = {


        tenDangNhap: '',
        matKhau: '',
        tinh: [],
        huyen: [],
        xa: [],
        xas: {},
        idxa: '',
        idhuyen: '',
        idtinh: '',
        status: 0,

    }



    // step 3

    async componentDidMount() {
        let listTinh = await DiaChiService.gettinh();
        this.setState({
            tinh: listTinh.data
        })
        console.log(this.state)

        // console.log("check res",res)
        //    if(this.props.match.params.id=== 'them'){
        //     return
        // }else{
        //     if (this.props.match.params && this.props.match){
        //         let id= this.props.match.params.id;
        //         let res=await LoaiSanPhamService.getLoaiSanPhamId(id)

        //         this.setState(
        //             {tenLSP: res.data.tenLSP,
        //             hinhAnh: res.data.hinhAnh,

        //         });

        //          }        
        //     }


    }
    save = (e) => {
        e.preventDefault();




        let user = { tenDangNhap: this.state.tenDangNhap, matKhau: this.state.matKhau, xa: this.state.xas };
        console.log('employee => ' + JSON.stringify(user));
        NguoidungService.dangki(user).then(res => {
            console.log(res.data)
            this.props.history.push('/dangnhap')

        });




    }
    changetinhHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            idtinh: event.target.value
        })
        DiaChiService.getHuyen(event.target.value).then(res => {
            this.setState({

                status: 1,
                huyen: res.data
            })

        });



    }
    changehuyenHandler = (event) => {
        console.log(event.target.value)

        DiaChiService.getXa(event.target.value).then(res => {
            console.log(res.data)
            console.log(res.data[0])
            this.setState({
                idhuyen: event.target.value,
                status: 2,

                xa: res.data
            }
            )

        });


    }
    changexaHandler = (event) => {


        let val = event.target.value;
        this.setState({
            idxa: val,
            status: 2
        })
        DiaChiService.getXaid(event.target.value).then(res => {
            this.setState({
                xas: res.data
            })
        })





    }
    changetenDangNhapHandler = (event) => {
        this.setState({ tenDangNhap: event.target.value });

    }

    changematKhauHandler = (event) => {
        this.setState({ matKhau: event.target.value });
    }

    // changeEmailHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancels = () => {
        this.props.history.push('/sanpham');
    }


    render() {
        let listTinh = this.state.tinh;
        let listhuyen = this.state.huyen;
        let lisxa = this.state.xa;
        console.log(this.state.idxa)
        return (
            <div>














                <div className="card-body">
                    <form>

                        <div className="form-group">
                            <label> Ten dang nhap </label>
                            <input placeholder="Ex:tamle" name="tenDangNhap" className="form-control"
                                value={this.state.tenDangNhap} onChange={this.changetenDangNhapHandler} />
                        </div>
                        <div className="form-group">
                            <label> Mat khau </label>
                            <input placeholder="Ex:123" name="matKhau" className="form-control"
                                value={this.state.matKhau} onChange={this.changematKhauHandler} />
                        </div>
                        <div className="form-group">
                            <label> Tinh</label>
                            <select className="form-control" onChange={(event) => this.changetinhHandler(event)} value={this.state.idtinh}>
                                <option value='' hidden >Chọn tỉnh, thành phố</option>
                                {

                                    listTinh && listTinh.length > 0 &&
                                    listTinh.map((item, index) => {

                                        return (

                                            <option key={index} value={item.matp}>{item.name}</option>
                                        )
                                    })



                                }
                            </select>
                        </div>
                        {
                            this.state.status > 0 && (
                                <div className="form-group">
                                    <label> Loại sản phẩm </label>
                                    <select className="form-control" onChange={(event) => this.changehuyenHandler(event)} value={this.state.idhuyen}>


                                        <option value='' hidden >Chọn quận huyện</option>



                                        {
                                            listhuyen && listhuyen.length > 0 &&
                                            listhuyen.map((item, index) => {

                                                return (
                                                    <option key={index} value={item.maqh}>{item.name}</option>
                                                )
                                            })



                                        }
                                    </select>
                                </div>
                            )



                        }

                        {
                            this.state.status > 1 && (
                                <div className="form-group">
                                    <label> Loại sản phẩm </label>
                                    <select className="form-control" onChange={(event) => this.changexaHandler(event)} value={this.state.idxa}>
                                        <option value='' hidden >Chọn xã, phường, thị trấn</option>
                                        {
                                            lisxa && lisxa.length > 0 &&
                                            lisxa.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.xaid}>{item.name}</option>
                                                )
                                            })



                                        }
                                    </select>
                                </div>
                            )



                        }


                        <button className="btn btn-success" onClick={this.save} >Save</button>
                        <button className="btn btn-danger" onClick={this.cancels} style={{ marginLeft: "10px" }}>Cancel</button>
                    </form>
                </div>
            </div>




        )
    }
}

export default withRouter(Register)
