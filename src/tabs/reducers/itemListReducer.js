
export const itemReducer = (state = [], action) => {

    switch (action.type) {
        case '[itemlistReducer] Add New Item':
            return [
                ...state,
                action.payload
            ];

        case '[itemlistReducer] Remove Item':
            return state.filter(item => item.id !== action.payload);

        case '[itemlistReducer] Add Price Item':
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        price: action.payload.price,
                    }
                }
            })

        case '[itemlistReducer] Item Status':
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item;
            });
    
        default:
            return state;
    }
}