import React,{useState} from 'react'
import axios from "axios"

 function UserSignIn() {

    const[data ,setData]= useState({
      email:"",
      password:""
    })
    const check= async(e)=>{
     try{ 
         e.preventDefault();
         console.log(data)
         
      let t1=   await axios.post("http://localhost:3001/login",data)
         alert("Data has gone")
         console.log(t1.data.data)
        let token=  localStorage.setItem("token",t1.data.data)
        console.log(localStorage.getItem("token"))

     }catch(err){
        alert(err.message)
       console.log(err.message)
     }
    }
  return (
    <div>
        <form onSubmit={(e)=>check(e)}>
        <fieldset>
            <legend>Sign In</legend>
            Email:
            <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
            <br/>
            <br/>
            password:
            <input type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
            <br/>
            <input type="submit"/>
        </fieldset>
        </form>
      
    </div>
  )
}
export default UserSignIn;