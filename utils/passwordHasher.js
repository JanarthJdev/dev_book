const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashEncoder = (mypassword) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(mypassword, salt);
  return hash;
};

const hashDecoder = async (plainText, hashPassword) => {
  let res = bcrypt.compareSync(plainText, hashPassword);
  return res;
};

module.exports = {
  hashEncoder,
  hashDecoder,
};
