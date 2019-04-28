import React from 'react';
import '../App.css';

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
            <td>
                <button name={props.name} onClick={props.handleDecrease}>-</button>
                <span> {props.quantity} </span>
                <button name={props.name} onClick={props.handleIncrease}>+</button>
            </td>
        </tr>        
    )
   
}

export default Item;