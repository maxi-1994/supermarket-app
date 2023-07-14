import PropTypes from 'prop-types';

import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { ListContext } from '../context/ListContext';



export const Item = ({ id, description, price, done }) => {

    const { changeDoneStatus } = useContext(ListContext);

    const { formState, onChangesInputValue } = useForm({
        price,
    });

    const onSubmitForm = (event) => {
        event.preventDefault();

        console.log(event.target.value);
    }

    const onClickChangeDone = ({target}) => {
        changeDoneStatus(target.id);
    }

    return (
        <div id="item" className={done ? 'item-done' : '' }>
            <p id={ id } onClick={ onClickChangeDone }>
                { description }
            </p>

            <div className="price-wrapper">
            {/* style={{ display: price > 0 ? 'block' : 'none' }} */}
                <div className="counter-content" > 
                    <span className="me-2">x1</span> 
                    <span className="price me-3">{ price }</span>
                    <button className="btn btn-primary increment-btn">-</button>
                    <button className="btn btn-primary decrement-btn">+</button>
                </div>
                {/* <div className="d-flex justify-content-end" style={{ display: price === 0 ? 'block' : 'none' }}>
                    <form className='m-0 p-0' onSubmit={ onSubmitForm }>
                        <label className="me-3"><i className="bi bi-currency-dollar"></i></label>
                        <input 
                            type="number" 
                            className="form-control"
                            name="price"
                            placeholder="0"
                            value={ formState.price }
                            onChange={ onChangesInputValue }
                        /> 
                    </form>
                </div> */}
            </div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
}