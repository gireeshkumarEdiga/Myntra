import React from "react";
import axios from "axios";
import { useEffect } from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
    const [matter, setMatter] = useState([]);
    const [data, setData] = useState({
        email:"",
        password:"",
    })

    const {email,password} = data;

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        axios.get("http://localhost:3001/details")
        .then((res) => setMatter(res.data));
    }

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(result.length>0){
            window.location.href = "./";
        }else{
            alert("wrong credintials");
        }
    }
    
    let result = matter.filter((user) => user.email === email && user.password === password);


    return (
        <div id="main">
            <div id="img">
                <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png" />
                <form onSubmit={handleSubmit} autoComplete="off">
                    <h3>login</h3>
                    <input type="email" placeholder="enter your email" name="email" value={email} onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="password" placeholder="enter your password" name="password" value={password} onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <button type="submit" style={{height:"30px",width:"80%"}}  >SUBMIT</button>
                </form>
                <p>If your new user then click here <Link style={{textDecoration:"none", color:"blue"}} to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}