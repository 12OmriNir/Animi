// ================= //
// cartManagement.js //
// ================= //

let cartItems = [];

// Returns the total amount of items in the cart.
export function productsAmountInCart()
{
  if (cartItems === null || cartItems === []) { return 0; }

  const totalAmountInCart = cartItems.reduce((prevItem, currItem) => prevItem + currItem.quantity, 0);
  return totalAmountInCart;
}

// Add new item to the cart.
// if the item exist, increase its quantity in the cart by 1.
export function addProductToCart(productId) {
  const doesProductExistInCart = cartItems.find((currProduct) => {
    return productId === currProduct.productId;
  });

  if (!doesProductExistInCart) {
    // The product doesn't exist, create new item.
    let cartItem = {
      productId: productId,
      quantity: 1,
    };

    cartItems.push(cartItem);
  } // The product already exist, increase quantity by 1.
  else {
    const currItem = doesProductExistInCart;
    currItem.quantity++;
  }

  updateLocalStorage();
}

// Decrease quantity by one if item exist in the cart, else removes the item entirely if quantity equals one.
export function removeProductFromCart(productId) {
  const doesProductExistInCart = cartItems.find((currProduct) => {
    return productId === currProduct.productId;
  });

  if (doesProductExistInCart)
  {
    const currItem = doesProductExistInCart;

    if (currItem.quantity > 1)
    {
      currItem.quantity--;
    }
    else if (currItem.quantity === 1)
    {
      const doesProductExist = (cartItem) => {
        return productId !== cartItem.productId;
      };
      cartItems = cartItems.filter(doesProductExist);
    }
    else
    {
      throw new Error("Try to remove from item from empty cart.");
    }

    updateLocalStorage();
  }
}

// Removes the item from the cart without consider its quantity.
export function removeItemFromProductsArray(productId)
{
    const doesProductExistInCart = cartItems.find((currProduct) => {
        return productId === currProduct.productId;
    });

    if (doesProductExistInCart)
    {
        const doseProductExist = (product) => { return productId !== product.productId };
        cartItems = cartItems.filter(doseProductExist);

        updateLocalStorage();
    }
    else
    {
        throw new Error('Try to remove not exist product from the cart.')
    }
}

// Set the cartItem quantity to the new quantity.
export function setProductQuantity(productId, newQuantity)
{
    if (newQuantity <= 0)
    {
        throw new Error('Invalid Input: Quantity must be bigger than one.');
    }

    const doesProductExistInCart = cartItems.find((currProduct) => {
      return productId === currProduct.productId;
    });

    if (doesProductExistInCart)
    {
        const currCartItem = doesProductExistInCart;        
        currCartItem.quantity = newQuantity;
    }
    else
    {
        throw new Error('Try to set quantity to not exist product in the cart.');
    }
  
    updateLocalStorage();
}

// Increase the cartItem quantity by the newQuantity. (newQuantity can be negative).
export function addQuantityToExistProduct(productId, newQuantity)
{
    const doesProductExistInCart = cartItems.find((currProduct) => { return productId === currProduct.productId; });

    if (doesProductExistInCart)
    {
        const currCartItem = doesProductExistInCart;

        const sum = (currCartItem.quantity + newQuantity);

        if (sum >= 1)
        {
            currCartItem.quantity = sum;
            updateLocalStorage();
        }
        else if (sum === 0)
        {
            throw new Error('Quantity cannot be zero.')
        }
        else
        {
            throw new Error('Quantity cannot be negative.')
        }
    }
    else
    {
        throw new Error('The product does not exist in the cart.');
    }
}

// Remove all the items from the cart
export function emptyCart() {
  cartItems = [];
  updateLocalStorage();
}

// ============================================ //
// These functions deals with the localStorage: //
// ============================================ //

// Set the cartItems array to the new array.
export function updateLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Read from the values from localStorage to the cartItems array.
export function loadFromLocalStorage() {
  const key = "cartItems";
  const value = localStorage.getItem(key);
  const parsedValue = value !== "undefined" ? JSON.parse(value) : null;

  cartItems = parsedValue;
  return JSON.parse(localStorage.getItem(key));
}

// Clear Cart Items From LocalStorage
export function clearCart() {
  const key = "cartItems";
  localStorage.removeItem(key);
}

export * as cartManagement from "./cartManagement";