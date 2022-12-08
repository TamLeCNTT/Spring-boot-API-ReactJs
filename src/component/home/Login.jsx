import React, { Component } from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";
import NguoidungService from '../service/NguoidungService';
import Nav from '../../layout/Nav';
import { connect } from 'react-redux';
class Login extends Component {
   state = {
  
            fileInfos:[],
           tenDangNhap: '',
            matKhau: '',
            file :''
        
        }
      
    

    // step 3

    async componentDidMount(){

        axios.get('http://localhost:8080/upload/files').then((response) => {
            this.setState({
              fileInfos: response.data,
            });
          });
       
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
       

      
       
            let user = {tenDangNhap:this.state.tenDangNhap,matKhau: this.state.matKhau};
            console.log('employee => ' + JSON.stringify(user));
           NguoidungService.dangnhap(user).then( res => {
                localStorage.setItem("jwt",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
               localStorage.setItem("tendangnhap",res.data.user.tenDangNhap);
                console.log(res.data)
                this.props.login()
              //  Nav.render()
            this.props.history.push('/')
            

        });
      

     
           
    }
    
    changetenDangNhapHandler= (event) => {
        this.setState({tenDangNhap: event.target.value});
      
    }

    changematKhauHandler= (event) => {
        this.setState({matKhau: event.target.value});
    }

    // changeEmailHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancels=()=>{
        this.props.history.push('/sanpham');
    }
    handleFileSelect = (e) => {
        const formData = new FormData();
        for(let i = 0; i< e.target.files.length; i++) {
            formData.append('file', e.target.files[i])
        }
        axios.post('http://localhost:8080/upload/upload',  formData).then(res=>{
            axios.get('http://localhost:8080/upload/files').then((response) => {
                this.setState({
                  fileInfos: response.data,
                });
              });
        });
     
      }
  
    render() {
        console.log("check render")
       let fileInfos=this.state.fileInfos
        return (
            <div>
                <br></br>
                   <div className = "container">
                 
                        <div className = "row">
                          
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Dang nhap</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Ten dang nhap </label>
                                            <input required placeholder="Ex:tamle" name="tenDangNhap" className="form-control" 
                                             value={this.state.tenDangNhap} onChange={this.changetenDangNhapHandler}  />
                                        </div>
                                        <div className = "form-group">
                                            <label> Mat khau </label>
                                            <input required type={'password'} placeholder="Ex:123" name="matKhau" className="form-control" 
                                             value={this.state.matKhau} onChange={this.changematKhauHandler}  />
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> anh </label>
                                            <input type="file" multiple  onChange={this.handleFileSelect}/>
                                        </div> */}

                                        <button className="btn btn-success"onClick={this.save} >Save</button>
                                        <button className="btn btn-danger" onClick={this.cancels}style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="card">
                                <div className="btn-group mx-auto">
                                    <h4 className="card-header ">Download the file
                                    </h4>
                                </div>
                                <ul className="list-group">
                                    {fileInfos &&
                                    fileInfos.map((file,index) => (
                                        <div key={index}>
                                         <a href={`http://localhost:8080/upload/download/${file}`}
                                        className="list-group-item list-group-item-action ">
                                        <li>{file}</li></a>
                                        <img style={{width:"200px",height:"100px",display: "block", marginLeft: "auto",marginRight: "auto"}} src={`http://localhost:8080/upload/download/${file}`} />
                                       
                                        </div>

                                    ))}
                                </ul>
                             </div> */}
                        </div>

                   </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{dataRedux:state.trangthai}
 }
 
 const mapDispatchToProps=(dispatch)=>{
     return{
         login:()=>dispatch({type:'LOGIN'}),
         
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))