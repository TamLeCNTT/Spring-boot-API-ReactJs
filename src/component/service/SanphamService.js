import axios from 'axios';
import authHeader from './JwtService';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/sanpham";

class SanphamService {

    getlist(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/list');

    }

    createsanpham(sanpham){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add', sanpham,{headers: authHeader() });


    }

    getsanphamId(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' +id,{headers: authHeader() });

    }

    updatesanpham(sanpham){
        return axios.put(EMPLOYEE_API_BASE_URL + '/edit' , sanpham,{headers: authHeader() });

    }

    deletesanpham(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/delete/' + id,{headers: authHeader() });

    }
}

export default new SanphamService()