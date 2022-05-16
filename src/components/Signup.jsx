import axios from "axios";
import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../redux/reduxSignup/action";
import "./Signup.css";

export const Signup = () => {
    const dispatch = useDispatch();

    const m = useSelector(store => store.todo);
    console.log(" SignUp "+m);

    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        number:"",
        password:"",
        confirmPassword:"",
        status:false,
    })

    const {firstname,lastname,email,number,password,confirmPassword} = data;

    useEffect(() => {
        // console.log("Last", manju)
        getTodo();
    },[])

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const getTodo = () => {
        axios.get("http://localhost:3001/details").then((res) => { dispatch(addTodo(res.data)) }).then(() => {console.log("Posted")})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("password doesn't match");
        }else{
            // axios.post("http://localhost:3001/details",data).then(() => getTodo())
            //console.log(data);
            window.location.href="/login";
            postData();
        }
    }

    const postData = () => {
        axios.post("http://localhost:3001/details",data)
        .then(() => getTodo())
    }

    return (
        <div id="main">
            <div id="img">
                <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png" />
                <form onSubmit={handleSubmit} autoComplete="off">
                    <h3>Signup</h3>
                    <input type="text" name="firstname" value={firstname} placeholder="enter your first name" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="text" name="lastname" value={lastname} placeholder="enter your last name" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="email" name="email" value={email} placeholder="enter your email" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="number" name="number" value={number} placeholder="enter your number" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="password" name="password" value={password} placeholder="enter your password" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="password" name="confirmPassword" value={confirmPassword} placeholder="enter the confirmed password" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="submit" style={{height:"30px",width:"80%", backgroundColor:"black",color:"white"}}/>
                </form>
            </div>
        </div>
    )
}