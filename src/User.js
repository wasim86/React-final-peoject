import axios from "axios";
import React, { useState } from "react";
// import axios from "axios";

function User() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdd] = useState({
    street: "",
    city: "",
    pincode: ""
   })
  const[password,setPassword]= useState("")

  const createData = async (e) => {
    try{
  
   
      e.preventDefault();
      
      console.log(address)
      let newData={title,name,phone,email,password,address}
      await axios.post("http://localhost:3001/register",newData)
      
      setTitle("")
      setName("")
      setPhone("")
      setEmail("")
      setPassword("")
      setAdd({street:"",city:"",pincode:""})
      alert("successfully submitted")
      

    } catch(err){
      alert(err.message)
      console.log(err.message)
    }
  };

  return (
    <div>
      <h1>Rahul kumar</h1>
      {/* <form  onSubmit={(e) => createData(e)}>
        <fieldset>
          <legend>User data</legend>
            title:
            <input  value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <br />
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            phone:
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <br />
            <br />
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <br/>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <br/>
            street:
    
            <input  value={address.street} onChange={(e)=>setAdd({...address, street:e.target.value})}/>
            <br/>
            <br/>
            pincode:
            <input   value={address.pincode} onChange={(e)=>setAdd({ ...address,pincode:e.target.value})}/>
            <br/>
            <br/>
            city:
            <input  value={address.city} onChange={(e)=>setAdd({...address,city:e.target.value})}/>
            <br/>
            <br/>
            submit:
            <input type="submit" />
          
        </fieldset>
      </form> */}

      {/* {createData !== " " &&<p>{data}</p> } */}
    </div>
  );
}
export default User;