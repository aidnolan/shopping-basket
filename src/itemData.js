const itemSetup = [
    {
        key: 0,
        name:"Travel book",
        tax: "exempt",
        price: 12.49,
        quantity: 0,
        category: "Books",
        taxRate: 0,
        taxDue: ""
    },
    {
        key: 1,
        name:"Music CD",
        tax: "sales",
        price: 14.99,
        quantity: 0,
        category: "Entertainment",
        taxRate: 20,
        taxDue: ""
    },
    {
        key: 4,
        name:"Chocolate bar",
        tax: "exempt",
        price: 0.85,
        quantity: 0,
        category: "Food",
        taxRate: 0,
        taxDue: ""
    },
    {
        key: 3,
        name:"Imported box of chocolates",
        tax: "import",
        price: 10.00,
        quantity: 0,
        category: "Food",
        taxRate: 5,
        taxDue: ""
    },
    {
        key: 2,
        name:"Imported perfume",
        tax: "sales and import",
        price: 47.50,
        quantity: 0,
        category: "Luxury",
        taxRate: 25,
        taxDue: ""
    },
    {
        key: 5,
        name:"Bottle of perfume",
        tax: "sales",
        price: 18.99,
        quantity: 0,
        category: "Luxury",
        taxRate: 20,
        taxDue: ""
    },
    {
        key: 6,
        name:"Packet of painkillers",
        tax: "import",
        price: 9.75,
        quantity: 0,
        category: "Medical Products",
        taxRate: 5,
        taxDue: ""
    },
]

const itemData = itemSetup.map(item =>{
    item.taxDue = item.taxRate === 0 ? 0 : Math.ceil((item.price * item.taxRate/100) * 100/item.taxRate) * item.taxRate/100;
    return item; 
})
console.log(itemData[0])

export default itemData;