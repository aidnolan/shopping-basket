import React, {Component} from 'react';
import '../App.css';

const Item = (props) => {
    const totalTax= (price) => {
        if(props.tax === "exempt"){
            return 0;
        } else if(props.tax === "sales"){
            return (price * 20 / 100);
        } else if(props.tax === "import") {
            return (price * 5 / 100);
        } else {
            // unsure if import tax is taken as a % of (price + sales tax) or sales tax is taken as a % of (price + import tax) or if it is as below
            return (price * 25 / 100);
        }
    }

    return(          
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                £{props.price.toFixed(2)}
            </td>
            <td>
                £{(totalTax(props.price)* props.quantity).toFixed(2)}
            </td>
            <td>
                £{((props.price + totalTax(props.price)) * props.quantity).toFixed(2)}
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