import { writable, get } from 'svelte/store';
import { generateRandomNumber } from '../utils'

const CART_INITIAL_STATE = [];

const cartStore = writable(CART_INITIAL_STATE);

export const getCartValues = () => get(cartStore);

export const cart = cartStore;

export const addProduct = (product) => {
  const values = getCartValues();
  const newCart = [...values, { cartId: generateRandomNumber(), ...product }];
  cartStore.set(newCart);
}

export const removeProduct = (product) => {
  const values = getCartValues();
  const newCart = values.filter(cart => cart.cartId !== product.cartId)
  cartStore.set(newCart);
}

export const getTotalPrice = () => {
  const values = getCartValues();
  const totalPrice = values.reduce((acc, current) => acc += current.price, 0)
  return totalPrice.toFixed(2);
}

export const getNumberOfProducts = () => {
  const values = getCartValues();
  return values.length;
}