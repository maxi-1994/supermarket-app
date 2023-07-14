import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { useForm } from "../../hooks/useForm";


export const AddItemInput = ({ addNewItem }) => {

    const { formState, onChangesInputValue, onResetForm } = useForm({
        description: '',
    })

    const onSubmitItem = (event) => {
        event.preventDefault();

        if(formState.description.length <= 1) {
            return;
        }

        const newItemList = {
            id: uuidv4(),
            description: formState.description.trim(),
            price: 0,
            done: false,
        };

        addNewItem(newItemList);
        onResetForm();
    }

    return (
        <form id="addItemForm" onSubmit={ onSubmitItem }>
            <input 
                type="text"
                className="form-control"
                placeholder="Add market item"
                name="description"
                value={ formState.description }
                onChange={ onChangesInputValue }
            />

            <button type='submit' className="btn btn-primary">
                <i className="bi bi-plus-lg"></i>
            </button>
        </form>

    )
}

AddItemInput.propTypes = {
    addNewItem: PropTypes.func.isRequired
}