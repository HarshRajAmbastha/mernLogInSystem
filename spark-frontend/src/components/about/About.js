import React, { useEffect } from 'react'
import "./about.css"
import {useHistory} from "react-router-dom"


export default function About() {
    const history = useHistory();
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }


        } catch (error) {
            console.log(error)
history.push("/login")
        }
    }

    useEffect(() => {
        callAboutPage()
    }, [])

    return (
        <>
            <div className=" d-flex justify-content-center align-items-center about">
                Hi Harsh !! Nice to see you here :)
                <br />
<form method="GET">
    <label htmlFor="">hadjkba</label>
    <input type="text" />
</form>

            </div>


        </>
    )
}
