import React from 'react';

const Item = (props) => {
    return(          
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                £{props.price.toFixed(2)}
            </td>
            <td>
                £{(props.taxDue * props.quantity).toFixed(2)}
            </td>
            <td>
                £{((props.price + props.taxDue) * props.quantity).toFixed(2)}
            </td>
            <td className="quantityDisplay">
                <button
                    name={props.name}
                    onClick={props.handleDecrease}>-
                </button>
                <span className="quantityNum">{props.quantity}</span>
                <button name={props.name} onClick={props.handleIncrease}>+</button>
            </td>
        </tr>        
    )
   
}

export default Item;