const getStoredDonation = () =>{

    const storedDonation = localStorage.getItem('donation');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonatedItems = id =>{
    const storedDonations = getStoredDonation();
    storedDonations.push(id);
    localStorage.setItem('donation',JSON.stringify(storedDonations));

}


export {getStoredDonation,saveDonatedItems}