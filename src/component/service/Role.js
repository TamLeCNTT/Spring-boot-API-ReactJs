export default function role() {
    const user = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;  
  if (user!=null) {
    let role=user.role;
    console.log(role)
    if (role.id_Role===1)
    return 1
    else
    return 0
  } else {
    console.log("Khong co")
    return -1;
  }
}
  

