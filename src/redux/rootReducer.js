
const users=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{}

const initState={
    
    user :localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{},
    sanpham:localStorage.getItem(`card${localStorage.getItem("tendangnhap")}`)?JSON.parse(localStorage.getItem(`card${localStorage.getItem("tendangnhap")}`)):[]
}

const rootReducer=(state=initState,action)=>{
    
    switch(action.type){
    
        case 'LOGIN':
            
            return {...state,user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{},sanpham:localStorage.getItem(`card${localStorage.getItem("tendangnhap")}`)?JSON.parse(localStorage.getItem(`card${localStorage.getItem("tendangnhap")}`)):[]}
          case 'LOGOUT':
            

            return {...state,user:{},sanpham:[]}

            case 'ADD_CARD':
                console.log(action.payload)
                return {...state,sanpham:action.payload}
        default:
            console.log("defaul")
            return state;
        }
    
   
}
export default rootReducer