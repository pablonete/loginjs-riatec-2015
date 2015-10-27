import * as common from '../../utils/common';

export function validateCredentials(credentials) {
  var validationResult = {
    success: false,
    error: null
  };

  if (common.isEmpty(credentials.username) || common.isEmpty(credentials.password)) {
    validationResult.error = {
      username: common.isEmpty(credentials.username),
      password: common.isEmpty(credentials.password)
    };

  } else {
    var validLogin = isValidLogin(credentials);
    setValidationResult(validLogin, validationResult);
  }

  return validationResult;
}

function setValidationResult(validLogin, validationResult) {
  if (validLogin) {
    validationResult.success = true;

  } else {
    validationResult.error = {
      login: true
    }
  }
}

function isValidLogin(credentials) {
  return credentials.username === 'John' && credentials.password === 'doe';
}

export function getErrorMessage(error) {
  var message = "";
  if (error.username && error.password) {
    message = "Username and password cannot be empty";

  } else  if (error.username) {
    message = "Username cannot be empty";

  } else if (error.password) {
    message = "Password cannot be empty";

  } else if (error.login) {
    message = "Incorrect Username or Password";
  }
  return message;
}
