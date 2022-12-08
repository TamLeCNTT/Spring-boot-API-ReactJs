import axios from 'axios';
import authHeader from './JwtService';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/diachi";

class DiaChiService {

    gettinh(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/tinh' );
    }

   
    getHuyen(matp){
        return axios.get(EMPLOYEE_API_BASE_URL + '/huyen/' +matp);
    }

    
    getXa(maqh){
        return axios.get(EMPLOYEE_API_BASE_URL + '/xa/' +maqh);
    }
    getXaid(xaid){
        return axios.get(EMPLOYEE_API_BASE_URL + '/xaid/' +xaid);
    }

}

export default new DiaChiService()