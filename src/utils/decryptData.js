var CryptoJS = require('crypto-js');

const decryptData = (data) => {
  const key = process.env.REACT_APP_CIPHER_SECRET;
  const bytes = CryptoJS.AES.decrypt(data, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export { decryptData };
