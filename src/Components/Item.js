import React from 'react';

const Item = (props) => {
    const totalWithTax= (price) => {
        if(props.tax === "exempt"){
            return 0;
        } else if(props.tax === "sales"){
            return (price * 20 / 100).toFixed(2);
        } else if(props.tax === "import") {
            return (price * 5 / 100).toFixed(2);
        } else {
            // unsure if import tax is taken as a % of (price + sales tax) or sales tax is taken as a % of (price + import tax) or if it is as below
            return (price * 25 / 100).toFixed(2);
        }
    }
    
    return(
        <div className="itemBox">
            <p>Product Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Number in Basket: {props.quantity}</p>
            <p>Tax due: {(totalWithTax(props.price)* props.quantity).toFixed(2)}
            </p>

        </div>
        
    )
}

export default Item;