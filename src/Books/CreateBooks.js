import axios from "axios";
import React, { useState } from "react";
// import axios from "axios";

function CreateBooks() {
  const [data, setData] = useState({
    title:"",
    excerpt:"",
    userId:"",
    ISBN:"",    
    releasedAt:"",
    category:"",
    subcategory:"",

  });

  const createData = async (e) => {
    try{
  
   
      e.preventDefault();
      
      console.log("hello",data)
      
     let t1=  await axios.post("http://localhost:3001/books",data)

      setData({title:"",excerpt:"",userId:"",ISBN:"",releasedAt:"",category:"",subcategory:""})
    //   setName("")
    //   setPhone("")
    //   setEmail("")
    //   setPassword("")
    //   setAdd({street:"",city:"",pincode:""})
      alert("successfully submitted")
      

    } catch(err){
      alert(err.message)
      console.log(err.message)
      console.log(Response.message)
      
    }
  };

  return (
    <div>
      
      <form  onSubmit={(e) => createData(e)}>
        <fieldset>
          <legend>Books Data</legend>
            title:
            <input  value={data.title} onChange={(e) => setData({...data,title:e.target.value})} />
            <br />
            <br />
            ISBN:
            <input type="Number" value={data.ISBN} onChange={(e) => setData({...data,ISBN:e.target.value})} />
            <br />
            <br />
            category:
            <input  value={data.category} onChange={(e) => setData({...data,category:e.target.value})} />
            <br />
            <br />
            subcategory:
            <input  value={data.subcategory} onChange={(e) => setData({...data,subcategory:e.target.value})} />
            <br/>
            <br/>
            userId:
            <input value={data.userId} onChange={(e) => setData({...data,userId:e.target.value})} />
            <br/>
            <br/>
            releasedAt:
            <input  value={data.releasedAt} onChange={(e)=>setData({...data, releasedAt:e.target.value})}/>
            <br/>
            <br/>
            excerpt:
            <input   value={data.excerpt} onChange={(e)=>setData({ ...data,excerpt:e.target.value})}/>
            <br/>
            

            submit:
            <input type="submit" />
          
        </fieldset>
      </form>

      {/* {createData !== " " &&<p>{data}</p> } */}
    </div>
  );
}
export default CreateBooks;