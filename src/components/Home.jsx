import React from 'react';
import pic from "../images/image1.png";
import './Home.css';
import data from "./json/data.json";
import info from "./json/info.json";
import matter from "./json/matter.json";
import stuff from "./json/stuff.json"

console.log(data)
export const Home = () => {
  return (
    <div>
        <div id="pic1">
            <img src={pic} alt="" />
        </div>
        <div id="pic2">
            <img src = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/11/58d71b0e-b4a0-4eec-a5b2-032fd01fda861652253337736-unnamed--11-.jpg" />
            <img src = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/11/c0f0ccd5-60c2-43e0-8428-8736958419e61652253337742-unnamed--10-.jpg" />
        </div>
        <div id="pic3">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1e599d37-1ed6-4e39-9057-ffb4065173b51651897264796-Unbelievable-Deals.jpg" />
        </div>
        <div id="pic4">
            {data.data.map((item,index) => (
                <div>
                    <img src={item.image} />
                </div>
            ))}
        </div>
        <div id="pic5">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/ba07b5b3-ad1f-4800-8968-4b1bc000be191651897264745-Budget-Buys.jpg" />
        </div>
        <div id="pic6">
            {info.info.map((item,index) => (
                <div>
                    <img src={item.image} />
                </div>
            ))}
        </div>
        <div id="pic7">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/0b611aab-e2ba-4a03-9910-146e9396a03f1651897264778-Lit-Brands-At-The-Hottest-Prices.jpg" />
        </div>
        <div id="pic8">
            {info.info1.map((item,index) => (
                <div>
                    <img src={item.image} />
                </div>
            ))}
        </div>
        <div id="pic9">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/4f8a8f56-e3d2-4a91-830b-98c6e4069b461651897264784-Loving-These-Brands.jpg" />
        </div>
        <div id="pic10">
            {matter.matter.map((item,index) => (
                <div>
                    <img src={item.image} />
                </div>
            ))}
        </div>
        <div id="pic11">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/f4b10903-d18d-44fa-8dc9-b49e7e86ae521651897264790-Shop-By-Category.jpg" />
        </div>
        <div id="pic12">
            {stuff.stuff.map((item,index) => (
                <div>
                    <img src={item.image} />
                </div>
            ))}
        </div>
    </div>
  )
}
