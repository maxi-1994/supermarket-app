/* eslint-disable react/prop-types */
import { ListContext } from "./ListContext"
import { useReducer } from 'react';

import { itemReducer } from '../reducers/itemListReducer';

const initialState = [
    {
        id: '1',
        done: false,
        description: 'Aceite de oliva',
        price: 0
    },
    {
        id: '2',
        done: true,
        description: 'Coca Cola',
        price: 0
    },
    {
        id: '3',
        done: false,
        description: 'Leche Descremada',
        price: 0
    }
];

export const ListProvider = ({ children }) => {

    const [ itemsState, dispatchItem ] = useReducer(itemReducer, initialState);

    const addNewItem = (newItem) => {
        const action = {
            type: '[itemlistReducer] Add New Item',
            payload: newItem,
        };

        dispatchItem(action);
    }

    const addPriceItem = (item) => {
        console.log(item);
    }

    const changeDoneStatus = (itemId) => {        
        const action = {
            type: '[itemlistReducer] Item Status',
            payload: itemId,
        };

        dispatchItem(action);
    }

    return (
        <ListContext.Provider value={{
            itemsState,
            addNewItem: addNewItem,
            addPriceItem: addPriceItem,
            changeDoneStatus: changeDoneStatus,
        }}>
            { children }
        </ListContext.Provider>
    )
}