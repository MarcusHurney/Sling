import _ from 'lodash';
const isEmpty = value => value === undefined || value === null || value === '';

export function email(value) {
  if (
    !isEmpty(value) &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    return 'Invalid email address';
  }
}

export function url(value) {
  if (!isEmpty(value) && !/^((http(s?):\/\/)?)w{0,3}.{1,1}\S+$/i.test(value)) {
    return 'Invalid URL';
  }
}

export function phone(value) {
  if (!isEmpty(value) && !/^\d{3}-\d{3}-\d{4}$/i.test(value)) {
    return 'Please enter phone number as XXX-XXX-XXXX';
  }
}

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be a number';
  }
}

export function validDate(dValue) {
  if (!dValue) {
    return;
  }
  let result = false;
  dValue = dValue.split('/');
  let monthPattern = /^\d{2}$/;
  let yearPattern = /^\d{4}$/;
  if (dValue[0] < 1 || dValue[0] > 12) result = true;

  if (!yearPattern.test(dValue[1])) result = true;

  if (dValue[2]) result = true;

  if (result) return 'Please enter a valid date in MM/YYYY format.';
}

export function hasUpperCase(value) {
  if (!/(?=.*?[A-Z])/.test(value)) {
    return 'Must contain at least one uppercase letter.';
  }
}

export function hasLowerCase(value) {
  if (!/(?=.*?[a-z])/.test(value)) {
    return 'Must contain at least one lowercase letter.';
  }
}

export function hasNumber(value) {
  if (!/(?=.*?[0-9])/.test(value)) {
    return 'Must contain at least one digit.';
  }
}

export function hasSpecialCharacter(value) {
  if (!/(?=.*?[#?!@$%^&*-])/.test(value)) {
    return 'Must contain at least one special character (!, @, $, or #).';
  }
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach(key => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
