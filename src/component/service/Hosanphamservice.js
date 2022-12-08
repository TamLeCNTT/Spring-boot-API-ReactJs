import axios from 'axios';
import authHeader from './JwtService';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/hosanpham";

class Hosanphamservice {

    getMau(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/mau' );
    }

   
    getsize(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/size');
    }
    getsizeid(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/size/'+id);
    }
    getsmauid(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/mau/'+id);
    }


    saveorupdateHoSP(hosanpham){
        return axios.put(EMPLOYEE_API_BASE_URL + '/save' , hosanpham);

    }

    
    

}

export default new Hosanphamservice()