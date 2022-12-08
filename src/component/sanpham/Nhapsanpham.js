import React, { Component } from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";
import SanphamService from '../service/SanphamService';
import LoaiSanPhamService from '../service/LoaiSanPhamService';
import Hosanphamservice from '../service/Hosanphamservice';
import { Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { toast } from 'react-toastify';

class Nhapsanpham extends Component {
   state = {
          
        mau:[],
        size:[],
        sizechon:[],
        listsp:[],
        spsave:{},
        mauchon:[],
        idsize:'',
        id_mau:'',
        save:[],trangthai:0
        }
      
    

    // step 3

    async componentDidMount(){
      await Hosanphamservice.getMau().then(res=>{
        this.setState({
            mau:res.data
        })
       })
       await Hosanphamservice.getsize().then(res=>{
        this.setState({
            size:res.data
        })
       })
       await SanphamService.getlist().then(res=>{
        this.setState({
            listsp:res.data
        })
       })
       this.changeSPHandler=this.changeSPHandler.bind(this)
       this.changegia=this.changegia.bind(this)
       this.changemauHandler=this.changemauHandler.bind(this)
       this.changesizeHandler=this.changesizeHandler.bind(this)
       this.changesoluong=this.changesoluong.bind(this)
        
    }
    changesizeHandler=(event)=>{
      
        let id=event.target.value
     
      
        let sizechons=this.state.sizechon
        let saveed=this.state.save
        let saves={}
        Hosanphamservice.getsizeid(event.target.value).then(res=>{
           
            if(this.state.mauchon.length>0){
                saves={size:res.data,mau:this.state.mauchon,gia:[],soluong:[],anh:''}
            }
      
            else{
               saves={size:res.data,mau:[],gia:[],soluong:[],anh:''}
            }
         
            saveed.push(saves)
            sizechons.push(res.data)
          
            this.setState({
                sizechon:sizechons,
                idsize:'',
                trangthai:2,
                save:saveed,
                size:this.state.size.filter(sizes => sizes.id_size != id)
            })
        })
    }
    changemauHandler=(event)=>{
      
        let id=event.target.value
     
      
        let mauchons=this.state.mauchon
        let saveend=[]
        let saveed=this.state.save
        Hosanphamservice.getsmauid(event.target.value).then(res=>{
           
            saveed.map((item,index)=>{
                item.mau=[...item.mau,res.data]
                saveend.push(item)
                console.log(item)

            })
            mauchons.push(res.data)
          
            this.setState({
                mauchon:mauchons,
                id_mau:'',
                save:saveend,
                mau:this.state.mau.filter(maus => maus.id_mau != id)
            })
        })
    }
    changegia=(event)=>{
        console.log(event.target.attributes)
        let size=event.target.attributes.sizes.value
        let mau=event.target.attributes.maus.value
       
        console.log(this.state.mauchon)
        console.log(this.state.sizechon)
        let saves=this.state.save
        saves[size].gia[mau]=event.target.value
        this.setState({
            save:saves
        })
        console.log(this.state.save[size])
       

    }
    changesoluong=(event)=>{
        console.log(event.target.attributes)
        let size=event.target.attributes.sizes.value
        let mau=event.target.attributes.maus.value
       
        console.log(this.state.mauchon)
        console.log(this.state.sizechon)
        let saves=this.state.save
        saves[size].soluong[mau]=event.target.value
        this.setState({
            save:saves
        })
        console.log(this.state.save[size])
       

    }
    changeSPHandler=(event)=>{
        SanphamService.getsanphamId(event.target.value).then(res=>{
            this.setState({
                spsave:res.data,
               
            })
        })
        
    }
    Xoasize=(event)=>{
        console.log(event)
        this.setState({
            sizechon:this.state.sizechon.filter(sizes=>sizes.id_size!=event)
        })
        Hosanphamservice.getsizeid(event).then(res=>{
            this.setState({
                size:[...this.state.size,res.data].sort((a, b) =>
                a.id_size <b.id_size ? -1 : 1,
              )
            })
        })
        let listsave=this.state.save.filter(save=>save.size.id_size!=event)
        if (listsave.length==0){
            this.setState({
                save:[],
                mauchon:[],trangthai:1
            })
        }
       else{
        this.setState({
            save:listsave
        })}
    }
    Xoamau=(event)=>{
        console.log(event)
        this.setState({
            mauchon:this.state.mauchon.filter(mau=>mau.id_mau!=event)
        })
        Hosanphamservice.getsmauid(event).then(res=>{
            this.setState({
                mau:[...this.state.mau,res.data].sort((a, b) =>
                a.id_mau <b.id_mau ? -1 : 1,
              )
            })
        })
        let listsave=this.state.save
        let indexs
        listsave.map((item,index)=>{
            indexs=item.mau.findIndex(maus=>maus.id_mau==event)
            if(indexs>-1){
                item.soluong.map((test,indes)=>{
                   
                        if(indes>=indexs){
                        item.soluong[indes]= item.soluong[indes+1]!=null? item.soluong[indes+1]:''
                        item.gia[indes]=item.gia[indes+1]!=null?item.gia[indes+1]:''}
                })
           }
            item.mau=item.mau.filter(mau=>mau.id_mau!=event)
            console.log(indexs)
            indexs=-1
          
        })

        this.setState({
            save:listsave
        })
    }
    
    Save=(event)=>{
        event.preventDefault()
        if(this.state.spsave.id_SanPham==null){
            toast.error("Vui long hcon sp")
        }
        else{
        let hosanpham = {};
        let listsave=this.state.save
        listsave.map((item,size)=>{
            item.mau.map((maued,maus)=>{
                hosanpham={sanpham:this.state.spsave,size:item.size,mau:maued,soLuongKho:item.soluong[maus]!=null?item.soluong[maus]:0,giaBan:item.gia[maus]!=null?item.gia[maus]:0,hinhAnh:item.anh}
                Hosanphamservice.saveorupdateHoSP(hosanpham).then( res => {
                    console.log(res)
                    //this.props.history.push('/sanpham')
                });
                console.log(item.size,maued,item.soluong[maus],item.gia[maus])
            }
            
            
            )

        })}
    }
    handleFileSelect = (event) => {
      
        let size=event.target.attributes.sizes.value;         
        let saves=this.state.save
        saves[size].anh=event.target.files[0].name
        this.setState({
            save:saves
        })
        
      
        const formData = new FormData();
        for(let i = 0; i< event.target.files.length; i++) {
            formData.append('file', event.target.files[i])
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
         let listMua=this.state.mau;
         let listSize=this.state.size;
         let listSizechon=this.state.sizechon
         let listmauchon=this.state.mauchon
         let listsp=this.state.listsp
         console.log(this.state.save)
        return (
            <div>
                <br></br>
                   <div className = "container">
                                   
                 
                        <div className = "row">
                          
                            <div className = "card col-4" style={{maxHeight:"510px"}}>
                              
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Tên  sản phẩm: </label>
                                            <select className="form-control" onChange={(event)=>this.changeSPHandler(event)} value={this.state.spsave.id_SanPham}>
                                            <option hidden  value=''  >Chọn sản phẩm </option>
                                                {
                                                    listsp && listsp.length>0 &&
                                                    listsp.map((item,index)=>{
                                                        return(
                                                            <option key={index} value={item.id_SanPham}>{item.tenSanPham}</option>
                                                        )
                                                    })

                                            
                                                   
                                                }
                                                    </select>
                                        </div>
                                      
                                              <div className = "form-group">
                                              <label> Size</label>
                                              <select className="form-control"  onChange={(event)=>this.changesizeHandler(event)} value={this.state.idsize} >
                                              <option hidden  value=''  >Chọn size</option>
                                                  {
                                                      
                                                      listSize && listSize.length>0 &&
                                                      listSize.map((item,index)=>{                                                        
                                                          return(
                                                              
                                                              <option  key={index} value={item.id_size}>{item.tensize}</option>
                                                          )
                                                      })                                                                                               
                                                  }
                                                      </select>
  
                                                  {
                                                          listSizechon && listSizechon.length>0 &&
                                                          listSizechon.map((item,index)=>{
                                                              
                                                              return(
                                                                  <>
                                                                  <td key={index} onClick={()=>this.Xoasize(item.id_size)} className="btn btn-success" style={{marginRight:"10px"}}>
                                                                  {item.tensize} 
                                                                  </td>
                                                                  </>
                                                              )
                                                          })
                                                  }
  
                                              </div>
                                        
                                      
                                      {
                                        this.state.trangthai>1&&(
                                            <div className = "form-group">
                                            <label> Mau</label>
                                            <select className="form-control"  onChange={(event)=>this.changemauHandler(event)} value={this.state.id_mau} >
                                            <option value='' hidden >Chọn mau</option>
                                                {
                                                    
                                                    listMua && listMua.length>0 &&
                                                    listMua.map((item,index)=>{
                                                        
                                                        return(
                                                            
                                                            <option style={{backgroundColor:item.mamau}} key={index} value={item.id_mau}>{item.tenmau}</option>
                                                        )
                                                    })

                                            
                                                   
                                                }
                                                    </select>
                                                    {
                                                        listmauchon && listmauchon.length>0 &&
                                                        listmauchon.map((item,index)=>{
                                                            
                                                            return(
                                                                <>
                                                                <td key={index} onClick={()=>this.Xoamau(item.id_mau)} className="btn btn-success" style={{marginRight:"10px"}}>
                                                                {item.tenmau} 
                                                                </td>
                                                                </>
                                                            )
                                                        })
                                                }
                                            </div>
                                        )
                                      }
                                        
                                        

                                        <button className="btn btn-success"onClick={(event)=>this.Save(event)} >Save</button>
                                        <button className="btn btn-danger" onClick={this.cancels}style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                           {
                            this.state.sizechon.length>0&&(
                                <div className = " col-md-8" >
                                <table className="table table-bordered border-primary"> 
                                <thead>
                                <tr>
                                      <td>Size</td>
                                      {
                                          this.state.mauchon.length>0&&(
                                              <>
                                              <td>Mau</td>
                                              <td>Gia</td>
                                                 <td>So Luong</td>
                                                 < td>
                                                 hinh anh</td>
                                                 </>
                                          )
                                      }
                                    
                                      
                                  </tr>
                                  </thead>
                                  <tbody>
                                {
                                  listSizechon&&listSizechon.length>0&&
                                  listSizechon.map((item,index)=>{
                                                              
                                      return(
                                          <>
                                         
                                  
                                          <tr  key={index}>
                                              <td rowSpan={listmauchon.length+1} key={index+1}  style={{verticalAlign:"middle"}}>
                                              {item.tensize} 
                                              </td>
                                           
                                              </tr>
                                             
                                              {listmauchon.map((item,indexs)=>{
                                                                          return(
                                                                           
                                                                              <tr  key={indexs+4}> 
                                                                                  <td  key={indexs}>
                                                                                 {item.tenmau} 
                                                                                  </td>
                                                                                  <td  key={indexs+2}>
                                                                                  <input placeholder="Ex:gia" name="giaban" maus={indexs} sizes={index}  className="form-control" 
                                                                                  onChange={(event)=>this.changegia(event)} value={this.state.save[index].gia[indexs]}                            />
                                                                                  </td>
                                                                                  <td  key={indexs+1}>
                                                                                  <input placeholder="Ex:so luong" name="giaban" maus={indexs} sizes={index}  className="form-control" 
                                                                                   onChange={(event)=>this.changesoluong(event)}        value={this.state.save[index].soluong[indexs]}                           />
                                                                                  </td>
                                                                                  <td>
                                                                             <input maus={indexs} sizes={index} className="form-control" onChange={(event)=>this.handleFileSelect(event)}
                                                                                    type="file"
                                                                                   
                                                                                    
                                                                                />
                                                                               
                                                                                  </td>
                                                                                  </tr>
                                                                                  
                                                                             )
                                                                      })
                                                                      }
                                      
                                          </>
                                        
                                      )
                                  })
                                }
                                </tbody>
                                 </table>
                                                              
                                                              </div>
                            )
                           }
                        </div>

                   </div>
            </div>
        )
    }
}

export default withRouter(Nhapsanpham)
