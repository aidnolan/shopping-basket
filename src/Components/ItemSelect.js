import React from 'react';
// import itemData from '../itemData';

const ItemSelect = (props) => {
    // console.log(props.options[1].key)
    return(
        <div className="productSelector">
            <select onChange={props.handleAdd}>
                <option>Select a product to add it to basket then use Quantity to update</option>
                {props.options}
            </select>
        </div>
    )
}

export default ItemSelect;