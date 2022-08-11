const MIN_NUMBER = 1;
const MAX_NUMBER = 99999999;

const ICONS_TYPES = {
  'trash': 'fa-solid fa-trash',
  'check': 'fa-solid fa-check'
}

export const generateRandomNumber = () => Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

export const getIcon = (type = '') => ICONS_TYPES[type]

export const isNumber = (value) => new RegExp('^[0-9]+$').test(value);
