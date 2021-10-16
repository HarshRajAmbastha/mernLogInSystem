import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
    return (
        <>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7064f8105512449.5f7b1e51a8e7a.jpg" alt="" />
    <Link class="navbar-brand" to="/">Welcome to Spark</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Log In</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
        </li>
       
        
       
      </ul>
     
    </div>
  </div>
</nav>

        </>
    )
}
