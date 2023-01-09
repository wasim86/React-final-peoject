import React,{useState} from 'react'
import axios from "axios"

 function BookReviews() {
    const[user,setUser]= useState("")
    const[data,setData]= useState("")

    
    const getReviews= async()=>{
        try{
           let t1=   await axios.get(``)
            setData(t1.data.data)
            console.log(t1.data.data)
            console.log(data)


        } catch(err){
            console.log(err.message)
        }
    }

  return (
    <div>
         UserId:
        <input  value={data} onChange={(e)=>setUser(e.target.value)} />
        <br/>
        <br/>
        <button onClick={(e)=>getReviews()}> Click Here</button>
        <br/>
        <br/>
        {data.length !==0 && data.map((x)=>{
          const {title,category,excerpt,userId,reviews,releasedAt,_id,ISBN,reviewsData}= x
          return(
            <div className="hello">title: {title}<br/>
  <div className="hello2">
 category: {category}<br/>
 excerpt: {excerpt}<br/>
 userId: {userId}<br/>
reviews:{reviews}<br/>
 releasedAt: {releasedAt}<br/>
 Id: {_id}<br/>
 ISBN:{ISBN}<br/>
 reviewsData:{reviewsData}
 </div>
  </div>)
        })}
          

        
    </div>
  )
}

export default BookReviews;