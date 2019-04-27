import React from 'react';
// import itemData from '../itemData';

const ItemSelect = (props) => {
    // console.log(props.options[1].key)
    return(
        <div>
            <select onChange={props.handleAdd}>
                <option>Click on a product to add it to your basket</option>
                {props.options}
            </select>
        </div>
    )
}

export default ItemSelect;