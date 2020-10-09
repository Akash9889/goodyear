import {inventory} from './inventory'
// const inventory = [
//     {
//         barcode: 'a',
//         name: 	'Banana',
//         price:	 '0.99'
//     },
//     {
//         barcode: 'b',
//         name: 	'Apple',
//         price:	 '1.30'
//     },
//     {
//         barcode: 'c',
//         name: 	'Carrot',
//         price:	 '1.66'
//     }
// ]

class CartOperations{
    constructor(){
        this.cart = []
        this.numOfItems = 0
    }

    addToCart(barcode, number = 1){
        if(!this.cart.some(item => item.bCode === barcode)){
            this.cart.push({bCode: barcode, qty: number})
            this.numOfItems += number
        }
        else{
            let updatedCart = this.cart.map(item => item.bCode === barcode 
                    ? 
                    {...item, qty: item.qty+number} 
                    : 
                    item 
                )
            this.cart = updatedCart
            this.numOfItems += number
        }
    }

    removeFromCart(barcode, number =1){
        if(this.cart.some(item => item.bCode === barcode)){
            
            let updatedCart = this.cart.map(item => {
                if(item.bCode === barcode) {
                    item.qty = item.qty - number >=0 ? item.qty - number : 0 
                    if(item.qty === 0) return ;
                    return {...item, qty: item.qty}
                }
                else return item
            })
            
            this.cart = updatedCart
            this.numOfItems = this.numOfItems - number >= 0 ? this.numOfItems - number : 0
        }
    }

    cartSummary(){
        if(this.numOfItems === 0) return 'Cart is Empty'
        function inventoryItem(barcode){
            let obj =   inventory.find(i => i.barcode === barcode )
            return obj
        }
        console.log(`Barcode	Description  Price
                     --------------------------`)
        this.cart.map( item => {
            console.log(`Item:     ${inventoryItem(item.bCode).name} - Qty: ${item.qty}  =        $${item.qty * inventoryItem(item.bCode).price}`)
        })
        let total =this.cart.map(item => item.qty * inventoryItem(item.bCode).price).reduce((a, b) => a+b) 
        console.log(`Total = $${total}`)
    }
}

const carts = new CartOperations()



//module.exports = {}

// const cartSample = {
//     barcode: 
//     qty:

// }