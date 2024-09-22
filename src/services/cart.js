
async function addItem(userCart, item) { 
    userCart.push(item);
}

async function calculateTotal(userCart) {
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(`Total: ${result}`);
}

async function deleteItem(userCart, name) {
    const deleteIndex = index - 1; 

    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function removeItem(userCart, item) {

    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //caso nao encontre o item;
   if(indexFound == -1) {
    console.log('item não encontrado')
    return
   }

    //diminuir um item;
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return
    }

    //caso item = 1 deletar o item;
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return
    }
}

async function displayCart(userCart) {
    console.log('\nShopee cart list:')
    userCart.forEach((item, index) => {
        console.log(`${index +1 }. ${item.name} - R& ${item.price} | ${item.quantity} x | Subtotal ${item.subtotal()}`);
    });
}

export {addItem, deleteItem, removeItem, calculateTotal, displayCart}

// const index = userCart.findIndex((item) => item.name === name);
// if(index !== -1) }
//  userCart.splice(index, 1);
// } 