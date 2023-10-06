import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Donation = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg } = donation;
    const donationCardStyle = {
        backgroundColor:card_bg,
        color: text_button_bg
    }
    const navigate = useNavigate();
    const showDonationDetail = () =>{
        navigate(`/${id}`)
    }
    return (
       
            <div onClick={showDonationDetail} className="card card-compact shadow w-80" style={donationCardStyle}>
                <figure className='h-[165px]'><img src={picture}/></figure>
                <div className="card-body">
                    <h2 className="card-title w-fit px-4 py-[1.8px] rounded-md font-medium text-sm"  style={{backgroundColor:category_bg}}>{category}</h2>
                </div>
                
                <div className='font-semibold text-xl pb-6 mx-4'>
                <h1>{title}</h1>
                </div>
                
            </div>
        
    );
};

export default Donation;

Donation.propTypes = {
    donation:PropTypes.obj,
    id: PropTypes.number,
    picture: PropTypes.any,
    title: PropTypes.string,
    category: PropTypes.string,
    category_bg: PropTypes.string,
    card_bg: PropTypes.string,
    text_button_bg: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
}