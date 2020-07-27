const crypto = require('crypto');


// Function to generate unique id
const generateUniqueId = () => {
  return crypto.randomBytes(4).toString('HEX');
}

module.exports = generateUniqueId;
