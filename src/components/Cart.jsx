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
import {removeCart} from '../redux/reduxCart/action';
import {useDispatch} from 'react-redux';

export const Cart = () => {

    const dispatch = useDispatch();

    const [showMenu,setShowMenu] = useState(false)



    const dataMatter = useSelector((state) => state.cart.cart);
    console.log(" data "+dataMatter);

    const remove = (id) => {
		console.log(id.id)
		dispatch(removeCart(id))	
	}

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

        // <div id="main">
        //     <div className="fixed bg-white top-0 right-0 w-1/3 h-full z-50 shadow  div3">
			 
        //      <div >
        //        <div className="border bg-black p-8 w-full h-1/5 flex justify-between text-2xl text-white">
        //            <div>
        //            My Cart
        //            </div>
             
        //          <div>
        //          <ClearIcon onClick={()=>{setShowMenu(false)}} className="cursor-pointer"/>
        //          </div>
        //        </div>
        //         <div>
   
        //             </div> 

        //             <div>
        //                 {dataMatter.map((item) => {
        //                     return (
        //                     <div classname="w-full h-1/5 border border-green-100 bg-white">

        //                         <div className="flex p-5 text-sm">
        //                         <div className="w-2/5">
        //                             <img src={item.id.images} alt="" />
        //                         </div>
        //                         <div className="ml-4 ">
        //                             <div className="mb-4">
        //                             {item.id.title}
        //                             </div>
        //                             <div className="flex">
        //                                 <div>
        //                                 {item.id.cost}
        //                                 </div>
                                    
                                   
                                   
        //                             </div>


                                
        //                         <div>
        //                         Quantity
        //                         </div>
        //                         <div>
        //                             <button className="bg-black text-white p-1 rounded-xl mt-3 " onClick={() => remove(item.id)}>Remove</button>
        //                         </div>
                               
        //                         </div>
        //                         <div>
                                  
        //                         </div>
                                
        //                         </div>
                               
                          


        //                     </div>

                            

        //                 )
        //                 })}
        //                 {dataMatter.map((e) =>
        //                     <div className="mainBox" key={e._id}>
        //                         <img className="prodImg" src={e.images} alt="" />
        //                         <p style={{fontSize:"15px",fontWeight:"700"}}>{e.brand}</p>
        //                         <p style={{lineHeight: "1%",color:"#323136",fontSize:"15px"}}>{e.category}</p>
        //                         <div style={{ display: 'flex' }}><p style={{ fontSize: "15px", fontWeight: "700" }}>{"Rs. " + e.price}</p><p style={{ marginLeft: "2%", textDecoration: "line-through", fontSize: "13px" }}>{"Rs." + e.off_price}</p><p style={{ marginLeft: "4%", fontSize: "13px", color: "#FF905A" }}>({e.discount} %OFF)</p></div>
        //                         <button className="bg-black text-white p-1 rounded-xl mt-3 " onClick={() => remove(e.id)}>Remove</button>
        //                     </div>
        //                  )}
        //             </div>
        //      </div>
        //      <div className="border bg-blue-500 w-full h-16 fixed bottom-0 flex ">
                 
        //          <div className=" p-4   text-2xl rounded-xl text-white">
                
        //          </div>

        //          <div className="p-4  text-2xl text-white rounded-xl ml-36" onClick={() => {done()}}>
        //             Proceed to Pay
        //          </div>

        //      </div>
        //  </div>

        // </div>

        <div className="rightDiv">
                            {
                                dataMatter.map((e) => (
                                    <div className="mainBox" key={e._id}>
                                        <img className="prodImg" src={e.images} alt="" />
                                        <p style={{fontSize:"15px",fontWeight:"700"}}>{e.brand}</p>
                                        <p style={{lineHeight: "1%",color:"#323136",fontSize:"15px"}}>{e.category}</p>
                                        <div style={{ display: 'flex' }}><p style={{ fontSize: "15px", fontWeight: "700" }}>{"Rs. " + e.price}</p><p style={{ marginLeft: "2%", textDecoration: "line-through", fontSize: "13px" }}>{"Rs." + e.off_price}</p><p style={{ marginLeft: "4%", fontSize: "13px", color: "#FF905A" }}>({e.discount} %OFF)</p></div>
                                        <button className="bg-black text-white p-1 rounded-xl mt-3 " onClick={() => remove(e.id)}>Remove</button>
                                    </div>
                                ))
                            }
        </div>
    )
}