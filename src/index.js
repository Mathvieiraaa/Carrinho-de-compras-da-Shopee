import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWhishList = [];

const item1 = await createItem("carrinho", 40.00, 1);  
const item2 = await createItem("geladeira", 160.00, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

/* await cartService.deleteItem(myCart, item2.name); */

console.log('\nCart total is:');
await cartService.calculateTotal(myCart);
