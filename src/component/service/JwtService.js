export default function authHeader() {
    const user = localStorage.getItem('jwt')?localStorage.getItem('jwt'):'';  
  if (user.length>0) {
    console.log("Token"+ "Bearer " + user)
    return {Authorization: 'Bearer ' + user};
  } else {
    console.log("Khong co")
    return ;
  }
}
  

