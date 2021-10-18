import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./signup.css"

export default function Signup() {
    const history = useHistory()
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })
    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();
        console.log("hra")
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
        'Accept': 'application/json'
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })


        const data = await res.json();
        console.log(data.status)
        if (data.status === 422 || !data) {

            // window.alert("Registration Failed :(")
            console.log("Registration Failed :(")
        } else {
            // window.alert("Registration Successful :)")
            console.log("Registration Successful :)")
            history.push("/login")
        }

    }

    return (
        <div className="register">
            <div className="main">
                <div className="reg-form">
                    <h2>Register Here</h2>
                    <form method="POST" id="register">
                        <label htmlFor="">User Name: </label>
                        <br />
                        <input type="text" name="name" id="name" placeholder="Enter Your  Name" value={user.name} onChange={handleInputs} />
                        <br />
                        <label htmlFor="">Email Address: </label>
                        <br />
                        <input type="email" name="email" id="name" placeholder="Enter Your Mail ID" value={user.email} onChange={handleInputs} />
                        <br />
                        <label htmlFor="">Mobile Number: </label>
                        <br />
                        <input type="number" name="phone" id="name" placeholder="Enter Your  Number" value={user.phone} onChange={handleInputs} />
                        <br />
                        <label htmlFor="">Work: </label>
                        <br />
                        <input type="text" name="work" id="name" placeholder="Your Profession" value={user.work} onChange={handleInputs} />
                        <br />
                        <label htmlFor="">Set Password: </label>
                        <br />
                        <input type="password" name="password" id="name" placeholder="Enter Your password" value={user.password} onChange={handleInputs} />
                        <br />
                        <label htmlFor="">Confirm Password: </label>
                        <br />
                        <input type="password" name="cpassword" id="name" placeholder="Confirm Your password" value={user.cpassword} onChange={handleInputs} />
                        <br /><br/>
                        <input type="submit" name="submit" id="submit" value="submit" onClick={postData} />
                    </form>
                </div>
            </div>
        </div>
    )
}
