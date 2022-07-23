const MIN_NUMBER = 1;
const MAX_NUMBER = 99999;

export const generateRandomNumber = () => Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
