import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonatedItems } from "../../utility/localstorage";

const DonationDetails = () => {
    const donation = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const selectedDonation = donation.find(x => x.id === intId);
    const handleDonation = () => {
        saveDonatedItems(intId);
        toast.error(`Thank you for donating ${selectedDonation.price}$`, {
            position: "top-center",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    return (
        <div className=" mt-8 flex justify-center relative left-10 md:static">
            <div className="w-[1200px]">
                <div>
                    <img className="w-full h-[700px] py-4" src={selectedDonation.picture} alt="" />
                    <div className="h-[125px] relative bottom-[140px] backdrop-brightness-50 flex items-center">
                        <div className="ml-8">
                            <button onClick={handleDonation} className="btn border-none bg-[#FF444A] text-white px-6 hover:text-[#FF444A]">Donate ${selectedDonation.price}</button>
                        </div>
                    </div>
                </div>
                <div className="relative bottom-24">
                    <h1 className="font-bold text-5xl">{selectedDonation.title}</h1>
                    <p className="font-normal text-lg py-4">{selectedDonation.description}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;
