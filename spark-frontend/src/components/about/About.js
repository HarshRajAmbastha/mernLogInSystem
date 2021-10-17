import React, { useEffect } from 'react'
import "./about.css"
import {useHistory} from "react-router-dom"


export default function About() {
    
  

    return (
        <div className="abt-body">
            <div className=" d-flex justify-content-center align-items-center about">
                Hi Harsh !! Nice to see you here :)
                <br />
                

            </div>
            <div className="box box-item align-items-center justify-content-center">
                    <div id="row-1" className="box-item">Id : 12345678</div>
                    <div id="row-2" className="box-item">Professsion : Web Development</div>
                    <div id="row-3" className="box-item">Lucky Number : 23</div>
                    <div id="row-4" className="box-item">Email Id: a@gmail.com</div>
                    <div id="row-5" className="box-item">Mobile No : 7878787878</div>
                </div>

                <div class="card-footer text-muted d-flex justify-content-center align-items-center">
    Designed and Developed by : Harsh Raj Ambastha
  </div>
        </div>
    )
}
