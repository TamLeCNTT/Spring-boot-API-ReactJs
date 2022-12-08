import React, { Component } from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";
import NguoidungService from '../service/NguoidungService';
import Nav from '../../layout/Nav';
import { connect } from 'react-redux';
class Uploadfile extends Component {
   state = {
  
            fileInfos:[],
        
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
                   
                                   
                                        <div className = "form-group">
                                            <label> anh </label>
                                            <input type="file" multiple  onChange={this.handleFileSelect}/>
                                        </div>

                                       
                                   
                              
                            </div>
                            <div className="card">
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
                             </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Uploadfile))