import { writable, get } from 'svelte/store';

const DELIVERY_INITIAL_STATE = {
  cep: '',
  state: '',
  city: '',
  address: '',
  number: ''
};

const deliveryStore = writable(DELIVERY_INITIAL_STATE);

export const getDeliveryValues = () => get(deliveryStore);

export const delivery = deliveryStore;

export const setDelivery = ({
  cep,
  state,
  city,
  address,
  number
}) => deliveryStore.set({
  cep,
  state,
  city,
  address,
  number
});
