import React, { useState } from "react";
import axios from "axios";
import "../App.css"

function GetBooks() {
  const [data, setData] = useState("");
  const [get, setGet] = useState("");
  const [check, setCheck] = useState([]);
  const getData = async () => {
    try {

      let t1 = await axios.get(`http://localhost:3001/books?${get}=${data}`);
      console.log(t1.data.data);
      setCheck(t1.data.data);

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
        
       <select onChange={(e) => setGet(e.target.value)}>
        <option>select any query from these query </option>
        <option>userId</option>
        <option>category</option>
        <option>subcategory</option>
      </select>
      <br />
      <br />
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <br />
      <br />
    
      <button  className="hello1"  onClick={(e) => getData()}>click here</button>

      <br/>
      <br/>

 {check.length!==0 && check.map((t1)=>{
 const {title,category,excerpt,userId,reviews,releasedAt,_id}= t1
 return(
  <div className="hello">title: {title}<br/>
  <div className="hello2">
 category: {category}<br/>
 excerpt: {excerpt}<br/>
 userId: {userId}<br/>
reviews:{reviews}<br/>
 releasedAt: {releasedAt}<br/>
 Id: {_id}
 </div>
  </div>)}) }         
       
    </div>
  );
}

export default GetBooks;