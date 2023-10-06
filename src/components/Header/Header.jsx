import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <nav>
        <div className="flex justify-around">
            <div className="flex justify-between">
            <div className="mt-4">
                    <img src="https://i.ibb.co/5RnxmRb/Logo.png"/>
                    </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-24 font-bold text-lg">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/donationList">Donation</NavLink> 
                    <NavLink to="/stat">Statistics</NavLink> 
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex items-center mt-6">
                <div className="menu menu-horizontal px-1 font-bold text-lg flex gap-8 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donationList">Donation</NavLink> 
                <NavLink to="/stat">Statistics</NavLink> 
                </div>
            </div>
        </div>
        </nav>
    
    );
};

export default Header;
