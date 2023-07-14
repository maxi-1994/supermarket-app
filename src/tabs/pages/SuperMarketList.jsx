import { useContext } from 'react';
import { ListContext } from '../context/ListContext';

import { AddItemInput } from '../components/AddItemInput';
import { ItemList } from '../components/ItemList';
import { TotalCounter } from '../components/TotalCounter';

export const SuperMarketList = () => {

    const { itemsState, addNewItem } = useContext(ListContext);

    return (
        <>
            <AddItemInput addNewItem={addNewItem} />
            <hr />

            <ItemList itemList={itemsState}/>
            <hr />
            
            <TotalCounter />
        </>
    )
}