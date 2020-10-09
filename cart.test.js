let Cart=  require('./cart')

let inv = require('./inventory')
console.log(inv.inventory[0])
describe('#add To Cart', () => {
    test('initially cart should be empty', () => {
        const emptyCart = Cart.addtoCart()
        expect(emptyCart.length).toBe(0)
    })
    
    test(' cart should return length of zero when  barcode is invalid', () => {
        const cart = Cart.addtoCart('1')
        expect(cart.length).toBe(0)
    })
    
    test(' cart should return length of one when single item barcode is passed', () => {
        const cart = Cart.addtoCart(inv.inventory[0].barcode)
        expect(cart.length).toBe(1)
    })
})

describe('#removeFromCart', () => {
    test('when cart is empty should return zero item',() => {
        const product = Cart.removeFromCart(inv.inventory[0].barcode)
        expect(product.length).toBe(0) 
    })

    test('remove the cart on the basis of barcode sent', () => {
        Cart.addtoCart(inv.inventory[0].barcode)
        Cart.addtoCart(inv.inventory[0].barcode)

        const product = Cart.removeFromCart(inv.inventory[0].barcode)
        expect(product.length).toBe(1)
    })
})



