const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function (data) {
  const errors = {};

  if(!Validator.isLength(data.name, { min: 2, max: 30 })){
    errors.name = 'Name have to be between 2 and 30'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};