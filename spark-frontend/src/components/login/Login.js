import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import "./login.css"

export default function Login() {
    let res;
   
    const history=useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       const loginUser= async (e)=>{
           console.log("login time")
           e.preventDefault();
           res = await fetch("/signin",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
        
            },
            body: JSON.stringify({
                email,  password
            })
           })
            const data = await res.json();
            console.log(data)
            sessionStorage.setItem("name",data.name)
            sessionStorage.setItem("id",data._id)
            sessionStorage.setItem("email",data.email)
            sessionStorage.setItem("phone",data.phone)
            sessionStorage.setItem("work",data.work)
        if (res.status === 400|| !data) {
            window.alert("Invalid Credentials")
            console.log("Registration Failed :(")
        } else {
            
            window.alert("Login Successful :)")
            console.log("Registration Successful :)")
            history.push("/about")
        }
       }

       

        
       
    


    return (
        <>
            <div className="body" >

                <div className="loginbox">
                    <img src="https://img.favpng.com/23/20/21/computer-icons-icon-design-person-download-png-favpng-NfUiqmSd4C12cJv3avzSf3enN.jpg" alt="" className="avatar" />
                    <h1>LogIn Here</h1>
                    <form method="POST">
                        <p><i class="zmdi zmdi-account"></i>  Username</p>
                        <input type="text" name="" placeholder="Enter User Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p><i class="zmdi zmdi-lock"></i>  Password</p>
                        <input type="password" name="" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="submit" name="" value="Log In" onClick={loginUser} />
                        <Link to="/reset" > Lost Your Password</Link><br />
                        <Link to="/signup">Don't have a account? Sign Up</Link>
                    </form>

                </div>
            </div>
            <div class="card-footer text-muted d-flex justify-content-center align-items-center">
    Designed and Developed by : Harsh Raj Ambastha
  </div>
        </>
    )
}
