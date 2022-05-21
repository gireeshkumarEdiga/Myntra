import React from "react";
import "./Cart.css";
import { Signup } from "./Signup";
import { useState } from 'react'
import { useNavigate } from 'react-router'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import {addCart, removeCart} from '../redux/reduxCart/action';
import {useDispatch} from 'react-redux';
import { useEffect } from "react";
import axios from "axios";

export const Cart = () => {
    // const [cart, setCart] = useState([]);

    const dispatch = useDispatch();

    const [showMenu,setShowMenu] = useState(false)

    // useEffect(() => {
    //     postData();
    // },[])

    // const postData = () => {
    //     axios.get("https://myntra123.herokuapp.com/productdetails")
    //     .then((res) => setCart(res.data));
    // }

    const cartData = useSelector((state) => state.cart.cart);
    console.log(" cartdata ", cartData);

    // const remove = (id) => {
    //     axios.delete(`https://myntra123.herokuapp.com/productdetails/${id}`)
    //     // .then((res) => setCart(res.data))
    //     .then(() => postData());
	// 	console.log(id)
	// 	dispatch(removeCart(id))	
	// }

	const done = () => {
		alert("Congratulation your order is placed")
	}

    const navigate = useNavigate();

    function handleClickCart() {
		navigate('/products')
	}

    function handleClickSignUp() {
		navigate('/signup')
	}


    // const data = useSelector((state) => state.Cart.cart)

    return (
        <div className="rightDiv">
                                {
                                    cartData.map((e) => (
                                        <div className="mainBox" key={e.id._id}>
                                            <img className="prodImg" src={e.id.images} alt="" />
                                            <p style={{fontSize:"15px",fontWeight:"700"}}>{e.id.brand}</p>
                                            <p style={{lineHeight: "1%",color:"#323136",fontSize:"15px"}}>{e.id.category}</p>
                                            <div style={{ display: 'flex' }}><p style={{ fontSize: "15px", fontWeight: "700" }}>{"Rs. " + e.id.price}</p><p style={{ marginLeft: "2%", textDecoration: "line-through", fontSize: "13px" }}>{"Rs." + e.off_price}</p><p style={{ marginLeft: "4%", fontSize: "13px", color: "#FF905A" }}>({e.id.discount} %OFF)</p></div>
                                            <button className="bg-black text-white p-1 rounded-xl mt-3 " onClick={() => dispatch(removeCart(e.id))}>Remove</button>
                                        </div>
                                    ))
                                }
        </div>
    )
}