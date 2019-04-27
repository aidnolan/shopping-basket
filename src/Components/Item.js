import React, {Component} from 'react';

class Item extends Component {
    constructor(){
        super();
        this.state = {
            quantity: 1
        }
        this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
        this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    }

    handleIncreaseQuantity(){
        this.setState({
            quantity: this.state.quantity + 1 
        })
    }

    handleDecreaseQuantity(){
        this.setState({
            quantity: this.state.quantity > 0 ? this.state.quantity - 1 : 0 
        })
    }

    render(){
        const totalTax= (price) => {
            if(this.props.tax === "exempt"){
                return 0;
            } else if(this.props.tax === "sales"){
                return (price * 20 / 100);
            } else if(this.props.tax === "import") {
                return (price * 5 / 100);
            } else {
                // unsure if import tax is taken as a % of (price + sales tax) or sales tax is taken as a % of (price + import tax) or if it is as below
                return (price * 25 / 100);
            }
        }

        return(
            <div className="itemBox">
                <p>Product Name: {this.props.name}</p>
                
                <p>Price: £{this.props.price.toFixed(2)}</p>
                
                <p>Number in Basket: {this.state.quantity}</p>
                
                <p>Tax due: £{(totalTax(this.props.price)* this.state.quantity).toFixed(2)}
                </p>
                
                <p>Total cost with Tax: £{((this.props.price + totalTax(this.props.price)) * this.state.quantity).toFixed(2)}</p>

                <button onClick={this.handleIncreaseQuantity}>Add</button>
                <button onClick={this.handleDecreaseQuantity}>Remove</button>
            </div>
            
        )
    }
}

export default Item;