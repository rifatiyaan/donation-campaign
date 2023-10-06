import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const List = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price } = donation;

    const customStyleOne = {
        backgroundColor: card_bg,
        color: text_button_bg
    }
    const customStyleTwo = {
        backgroundColor:text_button_bg,
        
    }
    const navigate = useNavigate();
    const showDonationDetail = () => {
        navigate(`/${id}`)
    }
    return (
        <div className='flex' style={customStyleOne}>

            <div className="card md:w-64 lg:w-96 bg-base-100 shadow-xl">
                    <img src={picture} className="w-64 md:w-80 lg:w-96 rounded-xl h-full" />
                </div>

                <div className="card-body w-80 flex flex-col gap-y-4">

                <div className='px-4 py-[1.8px] rounded-md font-medium text-sm w-fit mt-4'
                    style={{backgroundColor:category_bg}}>
                        {category}
                    </div>

                    <h1 className='card-title font-bold text-2xl text-black'>{title}</h1>
                    <h1 className='font-semibold text-xl'>$ {price.toFixed(2)}</h1>

                    <div className="card-actions custom">
                        <button onClick={showDonationDetail} className="btn btn-primary border-0 text-white" style={customStyleTwo}>View Details</button>

                    </div>
                    
                </div>
            </div>
    );
};

export default List;

List.propTypes = {
    donation: PropTypes.obj,
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