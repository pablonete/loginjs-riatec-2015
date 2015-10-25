import {isEmpty} from '../../utils/common';

export function validateCredentials(credentials) {
	var validationResult = {
		success: false,
		error: null
	};

	if (isEmpty(credentials.username) || isEmpty(credentials.password)) {
		validationResult.error = {
			username: isEmpty(credentials.username),
			password: isEmpty(credentials.password)
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
