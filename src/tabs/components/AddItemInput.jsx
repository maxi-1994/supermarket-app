import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { useForm } from "../../hooks/useForm";

/*
    TODO:
    - Este componente tiene que ser levantado en un modal.
    - Validar si ya existe el mismo producto (validarlo con el nombre ya que el ID se genera aleatoriamente).
    - Agregar validaciones de campos obligatorios.
*/ 
export const AddItemInput = ({ addNewItem }) => {

    const { formState, onChangesInputValue, onResetForm } = useForm({
        description: '', price: 0, quantity: 0
    });

    const priceCalculation = (price, quantity) => {
        return price * quantity
    };

    const onSubmitItem = (event) => {
        event.preventDefault();

        if(formState.description.length <= 1) {
            return;
        }

        const newItemList = {
            id: uuidv4(),
            description: formState.description.trim(),
            price: priceCalculation(Number(formState.price), Number(formState.quantity)),
            quantity: Number(formState.quantity),
            done: false,
        };
        
        addNewItem(newItemList);
        onResetForm();
    };

    return (
        <form id="addItemForm" onSubmit={ onSubmitItem }>
            <div className="form-group">
                <label htmlFor="description">Nombre producto</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Nombre producto"
                    name="description"
                    value={ formState.description }
                    onChange={ onChangesInputValue }
                />
            </div>


            <div className="form-group">
                <label htmlFor="price">Precio producto</label>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Precio producto"
                    name="price"
                    value={ formState.price }
                    onChange={ onChangesInputValue }
                />
            </div>

            <div className="form-group">
                <label htmlFor="quantity">Cantidad producto</label>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Cantidad"
                    name="quantity"
                    value={ formState.quantity }
                    onChange={ onChangesInputValue }
                />
            </div>
            <div className="button-wrapper">
                <button type='submit' className="btn btn-primary">
                    Agregar producto
                </button>
            </div>
        </form>

    )
}

AddItemInput.propTypes = {
    addNewItem: PropTypes.func.isRequired
}