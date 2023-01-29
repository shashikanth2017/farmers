import React, { useState } from "react";
import { NavLink,History, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "C:/nodejs/shash-23/src/2.jpg";
const Signup = () => {
    // const[user,setuser]=useState({
    //     email:'',username:'',password:'',confirmpassword:''
    // })
    const[email,setemail]=useState('');
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const[confirmpassword,setconfirmpassword]=useState('');
    const history=useNavigate();
    // const Postdata = async(e) => {
    //     e.preventDefault();
    //     const{email,username,password,confirmpassword}=user;
    //     const res =await fetch('/skills',{
    //         method:"GET",
    //         headers:
    //         {
    //             "Content-Type":"application/JSON"
    //         },
    //         body:JSON.stringify(
    //             {email,username,password,confirmpassword}
    //         )
    //     });

    // }
    // let name,value ,sum;
    // const handleInputs=(e)=>{
    //     console.log(e);
    //     name=e.target.name;
    //     value=e.target.value;
    //     setuser({...user,[name]:value});
    // }
    const submithandler=(e)=>{
        e.preventDefault();
        const users={email,username,password,confirmpassword};
        fetch("http://localhost:8000/users",{
           method:'POST',
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify(users)
        })
        // sum=JSON.stringify(user);
        // console.log(sum);
        .then(()=>{
            history("/product");
        })
    }
    
    
    return(
            
            <div className="c" style={{backgroundImage:`url(${image})`, backgroundSize: "cover",
            height: "100vh",}}>
            <form className="f" method="POST" onSubmit={submithandler}>
                <div className="grp">
                   <center> <label>&nbsp;&nbsp;email</label><input type="text" name="email" value={email}  
                    onChange={(s)=>setemail(s.target.value)} 
                     placeholder=" email" required/></center>
                      <center><label>&nbsp;&nbsp;username</label><input type="text" name="username" value={username} 
                     onChange={(s)=>setusername(s.target.value)} 
                     placeholder="username" required/></center>
                      <center><label>&nbsp;&nbsp;password</label><input type="password" name="password" value={password} 
                     onChange={(s)=>setpassword(s.target.value)} 
                     placeholder="password" /></center>
                      <center><label>&nbsp;&nbsp;confirmpassword</label><input type="password" name="confirmpassword" value={confirmpassword} 
                     onChange={(s)=>setconfirmpassword(s.target.value)} 
                     placeholder="confirmpassword"/></center>
                     <center><button type="submit"  value="register">sign in</button></center>

                </div>
            </form></div>
    )

}
 
export default Signup;
