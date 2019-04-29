import React from 'react';

const ItemSelect = (props) => {
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