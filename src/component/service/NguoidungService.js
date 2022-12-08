import axios from 'axios';
import authHeader from './JwtService';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/";

class NguoidungService {

    dangki(user){
        return axios.post(EMPLOYEE_API_BASE_URL+'register',user);
    }

    dangnhap(user){
        return axios.post(EMPLOYEE_API_BASE_URL+'login', user);

    }

    getLoaiSanPhamId(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' +id );
    }

    updateLoaiSanPham(loaisanpham){
        return axios.put(EMPLOYEE_API_BASE_URL + '/edit' , loaisanpham,{headers: authHeader() });
    }

    deleteLoaiSanPham(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/delete/' + id);
    }
}

export default new NguoidungService()