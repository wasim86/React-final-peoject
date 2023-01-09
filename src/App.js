import React,{useState} from 'react'
import axios from "axios"
import "./App.css"

function App() {

  const[pana, setPana]=useState([])
  const[data,setData]=useState("")
  const getData=async(url)=>{
    try{
    let t1= await axios.get(url)
    
    
    console.log("hello",t1.data.data)
    setPana(t1.data.data)
    console.log(pana)
    }
    catch(err){
      setData(err.message)

    }
  }
  // useEffect(()=>{
  //   getData("https://cdn-api.co-vin.in/api/v2/admin/location/states")
  // },[pana])
  return (
    
    <div>
      <h1 onClick={(e)=>getData("http://localhost:3001/books")}>hello</h1>

      {getData !== " " && <p>{data}</p>}
    
      
  
  { pana.map((t1)=>{
 const {title,category,excerpt,userId,reviews}= t1
 return(
  <div className="hello"> {title}<br/>
  {category}<br/>
  {excerpt}<br/>
  {userId}<br/>
  {reviews}</div>
 )
  })  }
    
      
    </div>
  )
}

export default App