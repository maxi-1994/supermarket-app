import { useState } from "react"

export const useForm = (initialStateForm = {}) => {

    const [ formState, setFormState ] = useState(initialStateForm);

    const onChangesInputValue = ({ target }) => {
        const { name, value } = target; 
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const onResetForm = () => {
        setFormState(initialStateForm);
    }

    return {
        formState,
        onChangesInputValue,
        onResetForm,
    }
}