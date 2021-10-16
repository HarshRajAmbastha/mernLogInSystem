import React from 'react'
import "./body.css"

export default function Body() {
    return (
        <>
        <div className="row no-gutters ">
           
            <div className="col-md-6">
                <div className="leftside d-flex justify-content-end align-items-center mr-2">WELCOME TO</div>
                
            </div>
            <div className="col-md-6">
                <div className="rightside d-flex justify-content-start align-items-center ">SPARK WEBSITE</div>
            </div>
        </div>
        <div class="card-footer text-muted d-flex justify-content-center align-items-center">
    Designed and Developed by : Harsh Raj Ambastha
  </div>
        </>
    )
}
