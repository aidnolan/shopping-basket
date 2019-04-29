import React from 'react';
// import itemData from '../itemData';

const ItemSelect = (props) => {
    // console.log(props.options[1].key)
    return(
        <div className="productSelector">
            <select onChange={props.handleAdd}>
                <option value="void">Select a product to add it to the basket</option>
                {props.options}
            </select>
        </div>
    )
}

export default ItemSelect;