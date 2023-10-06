import {   useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import List from "../List/List";

const DonationLists = () => {  
    const allDonations = useLoaderData();
    const [donatedData, setDonatedData] = useState([]);
    const [dataLength, setDataLength] = useState(4);
  
    useEffect(() => {
        const storedDonations = getStoredDonation();
        if (allDonations.length > 0) {
            const listDonation = allDonations.filter(donation => storedDonations.includes(donation.id));
            setDonatedData(listDonation);
        }
        else {
            [];
        }
    }, [allDonations])

    return (
        <div className=" mx-0 md:flex flex-col gap-8 lg:mx-40 ">
            <div className="grid grid-cols-1 lg:gap-4 mt-20 lg:grid-cols-2 gap-y-4">
                {
                    donatedData.slice(0, dataLength).map(donation => <List key={donation.id} donation={donation}></List>)
                }
            </div>
            <div className="my-8 flex justify-center">
                <div className={dataLength === donatedData.length && 'hidden'}>
                    <button onClick={() => setDataLength(donatedData.length)} className="btn border-2 border-green-700 bg-[#009444] text-white hover:text-[#009444] hover:bg-white">See All</button></div>
            </div>
        </div>
    );
};

export default DonationLists;