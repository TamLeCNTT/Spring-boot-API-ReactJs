import axios from 'axios';
import authHeader from './JwtService';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/loaisanpham";

class LoaiSanPhamService {

    getlist(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/list' );
    }

    createLoaiSanPham(loaisanpham){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add', loaisanpham,{headers: authHeader() });

    }

    getLoaiSanPhamId(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' +id,{headers: authHeader() });
    }

    updateLoaiSanPham(loaisanpham){
        return axios.put(EMPLOYEE_API_BASE_URL + '/edit' , loaisanpham,{headers: authHeader() });
    }

    deleteLoaiSanPham(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/delete/' + id,{headers: authHeader()});
    }
}

export default new LoaiSanPhamService()