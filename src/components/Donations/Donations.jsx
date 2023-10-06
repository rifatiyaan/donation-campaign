import { useEffect } from "react";
import { useState } from "react";
import Donation from "../Donation/Donation";
import MatchedDonation from "../MatchedDonation/MatchedDonation";
import PropTypes from 'prop-types';

const Donations = ({ text, isClicked }) => {
    const [donations, setDonations] = useState([]);
    const [foundDonations, setFoundDonations] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data));
    }, []);

    useEffect(() => {
        setFoundDonations([]);
        const found = donations.filter(x => (x.category).toLowerCase() === text.toLowerCase());
        setFoundDonations(found);
    }, [donations, text])

   
    const check = isClicked && foundDonations.length > 0 ? foundDonations : donations;
    return (
        <div className="mt-6 flex justify-center mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {
                     check.map(donation => (
                        (!isClicked) ? (
                            <MatchedDonation key={donation.id} found={donation}></MatchedDonation>
                        ) : (
                            <Donation key={donation.id} donation={donation}></Donation>
                        ) 
                        
                    ))
                    }
                

            </div>
        </div>
    );
};

export default Donations;
Donations.propTypes = {
    text:PropTypes.string,
    isClicked:PropTypes.func

}