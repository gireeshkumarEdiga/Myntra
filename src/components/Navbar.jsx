import React from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="main" style={{position:"fixed",width:"100%",marginTop:"0px",border:"1px solid black", zIndex:"5"}}>
            <div className="navbar">
                <img style={{width:"6%",height:""}} src= "data:image/png;base64,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" />
                {/* <a href="#home">Home</a> */}
                <div className="subnav">
                    {/* <Link to="/products" class="subnavbtn"><b>MEN</b><i class="fa fa-caret-down"></i></Link> */}
                    <button class="subnavbtn"><b>MEN</b><i class="fa fa-caret-down"></i></button>
                    <div class="subnav-content">
                        <div className="myn">
                            <div>
                                <a href="#company" style={{color:"red"}}>Topwear</a>
                                <a href="#team">T-shirts</a>
                                <a href="#careers">Causual Shirts</a>
                                <a href="#company">Formal Shirts</a>
                                <a href="#team">Sweatshirts</a>
                                <a href="#careers">Sweaters</a>
                                <a href="#team">Jackets</a>
                                <a href="#careers">Blazers & Coats</a>
                                <a href="#company">Suits</a>
                                <a href="#team">Rain Jackets</a>
                                <a href="#company" style={{color:"red"}}>Indian & Festive wear</a>
                                <a href="#team">Kurta & kurta Sets</a>
                                <a href="#careers">Sherwanis</a>
                                <a href="#company">Nehru Jackets</a>
                                <a href="#team">Dhotis</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"red"}}>Bottomwear</a>
                                <a href="#careers">Jeans</a>
                                <a href="#company">Causual Trousers</a>
                                <a href="#team">Formal Trousers</a>
                                <a href="#careers">Shorts</a>
                                <a href="#careers">Track Pants & Joggers</a>
                                <a href="#team" style={{color:"red"}}>Innerwear & Sleepwear</a>
                                <a href="#careers">Briefs & Trunks</a>
                                <a href="#company">Boxers</a>
                                <a href="#team">Vests</a>
                                <a href="#careers">Sleepwear & Loungwear</a>
                                <a href="#careers">Thermals</a>
                                <a href="#team" style={{color:"red"}}>Plus Size</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"red"}}>Footwear</a>
                                <a href="#careers">Causual Shoes</a>
                                <a href="#company">Sports Shoes</a>
                                <a href="#team">Formal Shoes</a>
                                <a href="#careers">Sneakers</a>
                                <a href="#careers">Sandals & Floaters</a>
                                <a href="#careers">Flip Flops</a>
                                <a href="#careers">Socks</a>
                                <a href="#team" style={{color:"red"}}>Personal Care & Grooming</a>
                                <a href="#team" style={{color:"red"}}>Sunglasses & Frames</a>
                                <a href="#team" style={{color:"red"}}>Watches</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"red"}}>Sports & Active Wear</a>
                                <a href="#team">Sports Shoes</a>
                                <a href="#careers">Sports Sandals</a>
                                <a href="#company">Active T-Shirts</a>
                                <a href="#team">Track Pants & Shorts</a>
                                <a href="#careers">Tracksuits</a>
                                <a href="#team">Jackets & Sweatshirts</a>
                                <a href="#careers">Sports Accessories</a>
                                <a href="#company">Swinwear</a>
                                <a href="#company" style={{color:"red"}}>Gadgets</a>
                                <a href="#team">Smart Wearables</a>
                                <a href="#careers">Fitness Gadgets</a>
                                <a href="#company">Headphones</a>
                                <a href="#careers">Speakers</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"red"}}>Fashion Accessories</a>
                                <a href="#team">Wallets</a>
                                <a href="#careers">Belts</a>
                                <a href="#company">Perfumes & Body Mists</a>
                                <a href="#team">Trimmers</a>
                                <a href="#careers">Deodorants</a>
                                <a href="#team">Ties, Cufflinks & Pocket Squares</a>
                                <a href="#careers">Accessory Gifts Sets</a>
                                <a href="#company">Caps & Hats</a>
                                <a href="#team">Mufflers, Scarves & Gloves</a>
                                <a href="#careers">Phone Cases</a>
                                <a href="#company">Rings & Wristwear</a>
                                <a href="#team">Helmets</a>
                                <a href="#company" style={{color:"red"}}>Bags & Backpacks</a>
                                <a href="#company" style={{color:"red"}}>Luggages & Trollers</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subnav">
                    <button class="subnavbtn"><b>WOMEN</b><i class="fa fa-caret-down"></i></button>
                    <div class="subnav-content">
                        <div className="myn">
                            <div>
                                <a href="#company" style={{color:"#ff78c5"}}>Indian & Fusion Wear</a>
                                <a href="#team">Kurtas & Suits</a>
                                <a href="#careers">Kurtis Tunics & Tops</a>
                                <a href="#company">Sarees</a>
                                <a href="#team">Ethnic Wear</a>
                                <a href="#careers">leggings, Salwars & Churidars</a>
                                <a href="#team">Dress Material</a>
                                <a href="#careers">Lehenga Cholis</a>
                                <a href="#company">Dupatts & Shawals</a>
                                <a href="#team">Jackets</a>
                                <a href="#company" style={{color:"#ff78c5"}}>Belts,Scarves & More</a>
                                <a href="#company" style={{color:"#ff78c5"}}>Watches & Wearables</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"#ff78c5"}}>Wstern Wear</a>
                                <a href="#careers">Dresses</a>
                                <a href="#company">Tops</a>
                                <a href="#team">Tshirts</a>
                                <a href="#careers">Jeans</a>
                                <a href="#careers">Trousers & Capris</a>
                                <a href="#careers">Shorts & Skirts</a>
                                <a href="#company">Co-ords</a>
                                <a href="#team">Playsuits</a>
                                <a href="#careers">Jumpsuits</a>
                                <a href="#careers">Shrugs</a>
                                <a href="#team">Sweaters & Sweatshirts</a>
                                <a href="#careers">Jackets & Coats</a>
                                <a href="#careers">Blazers & Wailstocats</a>
                                <a href="#team" style={{color:"#ff78c5"}}>Plus Size</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"#ff78c5"}}>Maternity</a>
                                <a href="#team" style={{color:"#ff78c5"}}>Sunglasses & Frames</a>
                                <a href="#team" style={{color:"#ff78c5"}}>Footwear</a>
                                <a href="#careers">flats</a>
                                <a href="#company">Causal Shoes</a>
                                <a href="#team">Heels</a>
                                <a href="#careers">Boots</a>
                                <a href="#careers">Sports & Shoes Floaters</a>
                                <a href="#team" style={{color:"#ff78c5"}}>Sports & Active Wears</a>
                                <a href="#careers">Clothing</a>
                                <a href="#company">Footwear</a>
                                <a href="#team">Sports Accessories</a>
                                <a href="#careers">Sports Equipment</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"#ff78c5"}}>Lingerie & Sleepwear</a>
                                <a href="#team">Bra.</a>
                                <a href="#careers">Briefs</a>
                                <a href="#company">Shapewears</a>
                                <a href="#team">Sleepwears & Loungewear</a>
                                <a href="#careers">Swimwear</a>
                                <a href="#team">Camisoles & Thermals</a>
                                <a href="#company" style={{color:"#ff78c5"}}>Beauty & Personal</a>
                                <a href="#careers">Makeup</a>
                                <a href="#company">Skincare</a>
                                <a href="#team">Premium Beaty</a>
                                <a href="#careers">Lipsticks</a>
                                <a href="#company">Fragrances</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"#ff78c5"}}>Gadgets</a>
                                <a href="#team">smart Wearables</a>
                                <a href="#careers">Fitness Gadgets</a>
                                <a href="#company">Headphones</a>
                                <a href="#team">Speakers</a>
                                <a href="#company" style={{color:"#ff78c5"}}>Jwellery</a>
                                <a href="#careers">Fashion Jewellery</a>
                                <a href="#team">Fine Jewellery</a>
                                <a href="#careers">Earrings</a>
                                <a href="#company" style={{color:"#ff78c5"}}>Backpacks</a>
                                <a href="#company" style={{color:"#ff78c5"}}>Handbags,Bags & Wallets</a>
                                <a href="#company" style={{color:"#ff78c5"}}>Luggages Trolleys</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subnav">
                    <button className="subnavbtn"><b>KIDS</b><i className="fa fa-caret-down"></i></button>
                    <div className="subnav-content">
                        <div className="myn">
                            <div>
                                <a href="#company" style={{color:"rgb(232,83,43)"}}>Boys Clothing</a>
                                <a href="#team">T-shirts</a>
                                <a href="#careers">Shirts</a>
                                <a href="#company">Shorts</a>
                                <a href="#team">Jeans</a>
                                <a href="#careers">Trousers</a>
                                <a href="#team">Clothing sets</a>
                                <a href="#careers">Ethnic Wears</a>
                                <a href="#company">Track Pants & Plyjams</a>
                                <a href="#team">Jacket, Sweater & Sweatshirts</a>
                                <a href="#company">Party Wears</a>
                                <a href="#team">Innerwear & Thermals</a>
                                <a href="#careers">Nightwear & Loungewear</a>
                                <a href="#company">Nightwear & Loungwear</a>
                                <a href="#team">Value Packs</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"rgb(232,83,43)"}}>Girls Clothing</a>
                                <a href="#careers">Dresses</a>
                                <a href="#company">Tops</a>
                                <a href="#team">Tshirts</a>
                                <a href="#careers">Clothing Sets</a>
                                <a href="#careers">Lehenga choli</a>
                                <a href="#team">Kurta Sets</a>
                                <a href="#careers">Durgarees & Jumpsuits</a>
                                <a href="#company">Skirts & Shorts</a>
                                <a href="#team">Tights & Leggings</a>
                                <a href="#careers">Jeans, Trousers & Capris</a>
                                <a href="#careers">Jacket, Sweaters & Sweatshirts</a>
                                <a href="#team">Nightwear & Loungwear</a>
                                <a href="#team">Value Packs</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"rgb(232,83,43)"}}>Footwear</a>
                                <a href="#careers">Causual Shoes</a>
                                <a href="#company">Flipflops</a>
                                <a href="#team">Shops Shoes</a>
                                <a href="#careers">Flats</a>
                                <a href="#careers">Sandals</a>
                                <a href="#careers">Heels</a>
                                <a href="#careers">Shool Shoes</a>
                                <a href="#careers">Socks</a>
                                <a href="#team" style={{color:"rgb(232,83,43)"}}>Toys</a>
                                <a href="#careers">Learning & Development</a>
                                <a href="#careers">Activity Toys</a>
                                <a href="#careers">Soft Toys</a>
                                <a href="#careers">Action Figure/Play set</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"rgb(232,83,43)"}}>Infants</a>
                                <a href="#team">Bodysuits</a>
                                <a href="#careers">Rompers & Sleepsuits</a>
                                <a href="#company">Clothing Sets</a>
                                <a href="#team">Tshirts & Tops</a>
                                <a href="#careers">Dresses</a>
                                <a href="#team">Bottom wear</a>
                                <a href="#careers">Winter Wear</a>
                                <a href="#company">Innerwear & Sleepwear</a>
                                <a href="#team">Infant Care</a>
                                <a href="#company" style={{color:"rgb(232,83,43)"}}>Home & Bath</a>
                                <a href="#company" style={{color:"rgb(232,83,43)"}}>Personal Care</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"rgb(232,83,43)"}}>Kids Accessories</a>
                                <a href="#team">Bags & Backpacks</a>
                                <a href="#careers">Watches</a>
                                <a href="#company">Jewellery & Hair accessory</a>
                                <a href="#team">Sunglasses</a>
                                <a href="#careers">Masks & Protective Gears</a>
                                <a href="#team">Caps & Hats</a>
                                <a href="#careers">Accessory Gifts Sets</a>
                                <a href="#company">Caps & Hats</a>
                                <a href="#company" style={{color:"rgb(232,83,43"}}>Brands</a>
                                <a href="#team">H&M</a>
                                <a href="#careers">Max Kids</a>
                                <a href="#company">Pantaloons</a>
                                <a href="#team">United Colors Of Benetton Kids</a>
                                <a href="#company">YK</a>
                                <a href="#company">U.S. Polo Assn Kids</a>
                                <a href="#company">Mothercare</a>
                                <a href="#company">HRX</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subnav">
                    <button className="subnavbtn"><b>HOME & LIVING</b><i className="fa fa-caret-down"></i></button>
                    <div className="subnav-content">
                        <div className="myn">
                            <div>
                                <a href="#company" style={{color:"rgb(245,209,3)"}}>Topwear</a>
                                <a href="#team">T-shirts</a>
                                <a href="#careers">Causual Shirts</a>
                                <a href="#company">Formal Shirts</a>
                                <a href="#team">Sweatshirts</a>
                                <a href="#careers">Sweaters</a>
                                <a href="#team">Jackets</a>
                                <a href="#careers">Blazers & Coats</a>
                                <a href="#company">Suits</a>
                                <a href="#team">Rain Jackets</a>
                                <a href="#company" style={{color:"rgb(245,209,3)"}}>Indian & Festive wear</a>
                                <a href="#team">Kurta & kurta Sets</a>
                                <a href="#careers">Sherwanis</a>
                                <a href="#company">Nehru Jackets</a>
                                <a href="#team">Dhotis</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"rgb(245,209,3)"}}>Bottomwear</a>
                                <a href="#careers">Jeans</a>
                                <a href="#company">Causual Trousers</a>
                                <a href="#team">Formal Trousers</a>
                                <a href="#careers">Shorts</a>
                                <a href="#careers">Track Pants & Joggers</a>
                                <a href="#team" style={{color:"rgb(245,209,3)"}}>Innerwear & Sleepwear</a>
                                <a href="#careers">Briefs & Trunks</a>
                                <a href="#company">Boxers</a>
                                <a href="#team">Vests</a>
                                <a href="#careers">Sleepwear & Loungwear</a>
                                <a href="#careers">Thermals</a>
                                <a href="#team" style={{color:"rgb(245,209,3)"}}>Plus Size</a>
                            </div>
                            <div>
                                <a href="#team" style={{color:"rgb(245,209,3)"}}>Footwear</a>
                                <a href="#careers">Causual Shoes</a>
                                <a href="#company">Sports Shoes</a>
                                <a href="#team">Formal Shoes</a>
                                <a href="#careers">Sneakers</a>
                                <a href="#careers">Sandals & Floaters</a>
                                <a href="#careers">Flip Flops</a>
                                <a href="#careers">Socks</a>
                                <a href="#team" style={{color:"rgb(245,209,3)"}}>Personal Care & Grooming</a>
                                <a href="#team" style={{color:"rgb(245,209,3)"}}>Sunglasses & Frames</a>
                                <a href="#team" style={{color:"rgb(245,209,3)"}}>Watches</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"rgb(245,209,3)"}}>Sports & Active Wear</a>
                                <a href="#team">Sports Shoes</a>
                                <a href="#careers">Sports Sandals</a>
                                <a href="#company">Active T-Shirts</a>
                                <a href="#team">Track Pants & Shorts</a>
                                <a href="#careers">Tracksuits</a>
                                <a href="#team">Jackets & Sweatshirts</a>
                                <a href="#careers">Sports Accessories</a>
                                <a href="#company">Swinwear</a>
                                <a href="#company" style={{color:"rgb(245,209,3)"}}>Gadgets</a>
                                <a href="#team">Smart Wearables</a>
                                <a href="#careers">Fitness Gadgets</a>
                                <a href="#company">Headphones</a>
                                <a href="#careers">Speakers</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"rgb(245,209,3)"}}>Fashion Accessories</a>
                                <a href="#team">Wallets</a>
                                <a href="#careers">Belts</a>
                                <a href="#company">Perfumes & Body Mists</a>
                                <a href="#team">Trimmers</a>
                                <a href="#careers">Deodorants</a>
                                <a href="#team">Ties, Cufflinks & Pocket Squares</a>
                                <a href="#careers">Accessory Gifts Sets</a>
                                <a href="#company">Caps & Hats</a>
                                <a href="#team">Mufflers, Scarves & Gloves</a>
                                <a href="#careers">Phone Cases</a>
                                <a href="#company">Rings & Wristwear</a>
                                <a href="#team">Helmets</a>
                                <a href="#company" style={{color:"rgb(245,209,3)"}}>Bags & Backpacks</a>
                                <a href="#company" style={{color:"rgb(245,209,3)"}}>Luggages & Trollers</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subnav">
                    <button className="subnavbtn"><b>BEAUTY</b><i className="fa fa-caret-down"></i></button>
                    <div className="subnav-content">
                        <div className="myn">
                            <div>
                                <a href="#company" style={{color:"#0db7af"}}>Makeup</a>
                                <a href="#team">Lipstick</a>
                                <a href="#careers">Lip Gloss</a>
                                <a href="#company">Lip Liner</a>
                                <a href="#team">Mascara</a>
                                <a href="#careers">Eyelinear</a>
                                <a href="#team">Kajal</a>
                                <a href="#careers">Eyeshadow</a>
                                <a href="#company">Foundation</a>
                                <a href="#team">Primer</a>
                                <a href="#company">Concealer</a>
                                <a href="#team">Compact</a>
                                <a href="#careers">Nail Polish</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"#0db7af"}}>Skincare, Bath & Body</a>
                                <a href="#team">Face Moisturiser</a>
                                <a href="#careers">Cleanser</a>
                                <a href="#company">Masks & Peel</a>
                                <a href="#team">Sunscreen</a>
                                <a href="#careers">Serum</a>
                                <a href="#team">Face Wash</a>
                                <a href="#careers">Lip Balm</a>
                                <a href="#company">Body lotion</a>
                                <a href="#team">Body wash</a>
                                <a href="#company">Body Scrub</a>
                                <a href="#team">Hand Cream</a>
                                <a href="#company" style={{color:"#0db7af"}}>Body Care</a>
                                <a href="#company" style={{color:"#0db7af"}}>Masks</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"#0db7af"}}>Appliances</a>
                                <a href="#team">Hair Straghteners</a>
                                <a href="#careers">Hair Dryer</a>
                                <a href="#company">Epilator</a>
                                <a href="#company" style={{color:"#0db7af"}}>Mens Grooming</a>
                                <a href="#careers">Trimmer</a>
                                <a href="#team">Beard oil</a>
                                <a href="#careers">Hair Wax</a>
                                <a href="#company" style={{color:"#0db7af"}}>Beauty Gift & Makeup Sets</a>
                                <a href="#company">Beauty Gifts</a>
                                <a href="#team">Makeup Kit</a>
                                <a href="#company" style={{color:"#0db7af"}}>Premium Beauty</a>
                                <a href="#company" style={{color:"#0db7af"}}>Welliness & Hygiene</a>
                            </div>
                            <div>
                            <a href="#company" style={{color:"#0db7af"}}>Top Brands</a>
                                <a href="#team">lakme</a>
                                <a href="#careers">Maybelline</a>
                                <a href="#company">LOreal</a>
                                <a href="#team">Philips</a>
                                <a href="#careers">Bath & Body Works</a>
                                <a href="#team">THE BODY SHOPS</a>
                                <a href="#careers">Biotique</a>
                                <a href="#company">Mamaearth</a>
                                <a href="#company">MCaffeine</a>
                                <a href="#team">Nivea</a>
                                <a href="#careers">Lotus Herbals</a>
                                <a href="#company">KAMA AYURVEDA</a>
                                <a href="#careers">MAC</a>
                                <a href="#careers">Forest Essentials</a>
                            </div>
                            <div>
                                <a href="#company" style={{color:"#0db7af"}}>Fashion Accessories</a>
                                <a href="#team">Wallets</a>
                                <a href="#careers">Belts</a>
                                <a href="#company">Perfumes & Body Mists</a>
                                <a href="#team">Trimmers</a>
                                <a href="#careers">Deodorants</a>
                                <a href="#team">Ties, Cufflinks & Pocket Squares</a>
                                <a href="#careers">Accessory Gifts Sets</a>
                                <a href="#company">Caps & Hats</a>
                                <a href="#team">Mufflers, Scarves & Gloves</a>
                                <a href="#careers">Phone Cases</a>
                                <a href="#company">Rings & Wristwear</a>
                                <a href="#team">Helmets</a>
                                <a href="#company" style={{color:"#0db7af"}}>Bags & Backpacks</a>
                                <a href="#company" style={{color:"#0db7af"}}>Luggages & Trollers</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subnav">
                    {/* <button className="subnavbtn"><b>STUDIO</b><i className="fa fa-caret-down"></i></button> */}
                     <Link to="/products" class="subnavbtn"><b>PRODUCTS</b><i class="fa fa-caret-down"></i></Link>
                </div>
                <div className="subnav">
                     <Link to="/cart" class="subnavbtn"><b>CART</b><i class="fa fa-caret-down"></i></Link>
                </div>
            </div>
            <div className="in" >
                <input type="text" placeholder="Search for product, brands and more"/>
            </div>
            <div className="icons">
                <div className="dropdown">
                    <img src="" />
                    <div className="dropbtn">Profile</div>
                    <div className="dropdown-content">
                        <a href="#">
                            <b style={{paddingTop:"20px"}}>welocme</b>
                            {/* <p style={{fontSize:"15px"}}>To access accound and manage orders</p> */}
                        </a>    
                            {/* <button>LOGIN/SIGNUP</button> */}
                            <Link className="login" to="/login">LOGIN/SIGNUP</Link>
                        <hr />
                        <a href="#">orders</a>
                        <a href="#">wishlist</a>
                        <a href="#">Gift Cards</a>
                        <a href="#">Contact us</a>
                        <a href="#">Myntra Insider</a>
                        <hr />
                        <a href="#">Myntra Credit</a>
                        <a href="#">Coupons</a>
                        <a href="#">Saved Cards</a>
                        <a href="#">Saved Addresses</a>
                        <a href="#"></a>                        
                    </div>
                </div>
                <div className="drop">Wishlist</div>
                <div className="drop">Bag</div>
            </div>
        </div>
    )
} 