import React from 'react';

const Item = (props) => {
    console.log(props);
    return(
        <div className="itemBox">
            <p>Product Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Number in Basket: {props.quantity}</p>
        </div>
        
    )
}

export default Item;