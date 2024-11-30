import PropTypes from 'prop-types';

import { useContext } from 'react';
import { ListContext } from '../context/ListContext';



export const Item = ({ id, description, price, quantity, done }) => {

    const { changeDoneStatus } = useContext(ListContext);

    const onClickChangeDone = ({target}) => {
        changeDoneStatus(target.id);
    }
    // TODO: El price debe ser dependiendo la cantidad del item.
    return (
        <div id="item" className={done ? 'item-done' : '' }>
            <p id={ id } onClick={ onClickChangeDone }>
                { description }
            </p>

            <div className="price-wrapper">
                <div className="counter-content" > 
                    <span className="me-2">x{ quantity }</span> 
                    <span className="price me-3">${ price }</span> 
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
}