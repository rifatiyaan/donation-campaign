import { useState } from "react";
import DonationLists from "../DonationLists/DonationLists";


const Banner = ({handleSearchValue,handleSearchBtn}) => {  
    
    return (
        <div className="flex justify-center mt-20 banner-section h-[500px] bg-[url('https://i.ibb.co/HPJT0rt/382595518-6497916030317777-6088165813493407337-n.jpg')] bg-cover bg-center md:relative bottom-8">
            <div className="flex flex-col justify-center w-full bg-opacity-95 bg-white">
            
            <div>
            <h1 className="font-bold text-5xl text-center text-black py-8">I Grow By Helping People In Need</h1>
            </div>

            <div className="join flex justify-center py-8">
                    <div>
                        <input onChange={handleSearchValue} className=" lg:input join-item " placeholder="Search here...." />
                    </div>
                <div onClick={handleSearchBtn}>
                    <button className="btn join-item bg-[#FF444A] text-white hover:text-[#FF444A]" >Search</button>
                    
                </div>
            </div>
           
            
        </div>
        </div>
    );
};

export default Banner;