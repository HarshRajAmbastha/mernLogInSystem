import React, { useEffect, useState } from 'react'
import "./about.css"
import {useHistory} from "react-router-dom"


export default function About() {
    const history=useHistory();
    
   
    const callAboutPage=async()=>{
        try {
            const res=await fetch("/about",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })
            const data=await res.json();
            console.log(data);
          
           
            if(!res.status===200){
               const error=new Error (res.error)
               throw error
            }
            
        } catch (error) {
            console.log(error)
            history.push("/login")
        }
    }
    
  useEffect(() => {
     callAboutPage();
  }, [])

    return (
<div className="abt">
<div className="card1 d-flex justify-content-center align-items-center">
    <div className="pic ">
        <img className="avtaar" src="https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png" alt="" />
        <div className="name">{sessionStorage.getItem("name")}</div>
        <div className="work">{sessionStorage.getItem("work")}</div>
    </div>
    <div className="details">
    <div class="container my-3">
  <div class="row my-1  a-row">
    <div class="col a-col">
      UserID:
    </div>
    <div class="col a-col">
    {sessionStorage.getItem("id")}
    </div>
    
  </div>
  <div class="row my-1 a-row">
    <div class="col a-col ">
     Email ID:
    </div>
    <div class="col a-col">
    {sessionStorage.getItem("email")}
    </div>
    
  </div>
  <div class="row my-1 a-row">
    <div class="col a-col">
      Contact No:
    </div>
    <div class="col a-col">
    {sessionStorage.getItem("phone")}
    </div>
    
  </div>
</div>  
    </div>
        
    
</div>

                <div class="card-footer text-muted d-flex justify-content-center align-items-center">
    Designed and Developed by : Harsh Raj Ambastha
  </div>

</div>
    )
}
