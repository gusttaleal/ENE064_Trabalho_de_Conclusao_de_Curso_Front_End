var CryptoJS = require('crypto-js');

const encryptData = (data) => {
  const key = process.env.REACT_APP_CIPHER_SECRET;
  const ciphertext = CryptoJS.AES.encrypt(data, key).toString();
  return ciphertext;
};

export { encryptData };
