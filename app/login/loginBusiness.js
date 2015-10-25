
app.loginValidation = (function() {
	function validateCredentials(credentials) {
		var validationResult = {
			success: false,
			error: null
		};

		if (utils.common.isEmpty(credentials.username) || utils.common.isEmpty(credentials.password)) {
			validationResult.error = {
				username: utils.common.isEmpty(credentials.username),
				password: utils.common.isEmpty(credentials.password)
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

	function getErrorMessage(error) {
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

	return {
		validateCredentials: validateCredentials,
		getErrorMessage: getErrorMessage
	};
})();
