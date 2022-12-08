import React from "react";

class Home extends React.Component{
    // componentDidMount(){
    //     setTimeout(()=>
    //     {
    //         this.props.history.push('/todo')
    //     },3000)
    // }

    deleteUser=(user)=>{
        console.log(user);
        this.props.xoauser(user);


    }
    render(){
        console.log("check prok",this.props);
       
                return(
            <>
            <div>
                heloo tam xi
            </div>
            
            </>
        )
    }
}

export default Home