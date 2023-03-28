function doubleCartQuantities(cart){
  for(let i=0;i<cart.length;i++){
    cart[i] *= 2
  }
}

const cart = [1,2,3,4,5,6,7,8];
console.log("Before :" , cart);
doubleCartQuantities(cart);
console.log("After :" , cart);