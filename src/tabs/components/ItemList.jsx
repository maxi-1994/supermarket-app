import PropTypes from 'prop-types';

import { Item } from './Item';

export const ItemList = ({ itemList }) => {
    
    return (
        <div className="items-wrapper">
            {
                itemList.map(item => {
                    return (
                        <Item key={item.id} {...item} />
                    )
                })
            }
        </div>
    )
}

ItemList.propTypes = {
    itemList: PropTypes.array.isRequired,
}
