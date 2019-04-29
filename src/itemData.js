// Dummy list of items and map to create list including tax due 

/*Note: "taxDue" calculated as all tax being from base price 
i.e. 25% for imported items that incur sales tax.
Could be calculated as import tax on (item price + sales tax due)
or sales tax on (item price + import tax due) */

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
        tax: "exempt",
        price: 9.75,
        quantity: 0,
        category: "Medical Products",
        taxRate: 0,
        taxDue: ""
    },
    {
        key: 7,
        name:"Crime & Punishment",
        tax: "exempt",
        price: 7.99,
        quantity: 0,
        category: "Books",
        taxRate: 0,
        taxDue: ""
    },
    {
        key: 8,
        name:"Porridge Oats",
        tax: "exempt",
        price: 1.70,
        quantity: 0,
        category: "Food",
        taxRate: 5,
        taxDue: ""
    },
    {
        key: 9,
        name:"Imported Blu-Ray",
        tax: "import",
        price: 15,
        quantity: 0,
        category: "Entertainment",
        taxRate: 25,
        taxDue: ""
    },
    {
        key: 10,
        name:"Diamond Earrings",
        tax: "sales",
        price: 120,
        quantity: 0,
        category: "Luxury",
        taxRate: 20,
        taxDue: ""
    },
    {
        key: 11,
        name:"Bandages",
        tax: "exempt",
        price: 4,
        quantity: 0,
        category: "Medical Products",
        taxRate: 0,
        taxDue: ""
    }
]

const itemData = itemSetup.map(item =>{
    item.taxDue = item.taxRate === 0 ? 0 : Math.ceil((item.price * item.taxRate/100) * 100/item.taxRate) * item.taxRate/100;
    return item; 
})

export default itemData;