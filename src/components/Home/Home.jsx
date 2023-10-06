import { useState } from "react";
import Banner from "../Banner/Banner";
import Donations from "../Donations/Donations";

const Home = () => {
     const [search,setSearch] = useState("");
     const [text,setText] = useState("");
     const [isClicked,setIsClicked] = useState(false);
    const handleSearchValue = e =>{
        const searchedValue = e.target.value;
        setSearch(searchedValue);
    };
    const handleSearchBtn = () =>{
        setText("");
        if(search){
        setText(search);
        }
        if(text){
        setIsClicked(!isClicked);
        }
     }
     
    return (
        <div className="max-w-screen-5xl mx-auto">
           <Banner isClicked={isClicked} handleSearchValue={handleSearchValue} search={search} handleSearchBtn={handleSearchBtn}></Banner> 
           <Donations text={text} handleSearchBtn={handleSearchBtn} isClicked={isClicked}></Donations>
        </div>
    );
};

export default Home;