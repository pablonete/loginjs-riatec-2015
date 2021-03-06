﻿import $ from 'jquery';
import * as loginValidation from './loginBusiness';

function getCredentialsLoginForm() {
	var credentials = {
		username: $('#username')[0].value,
		password: $('#password')[0].value
	};

	return credentials;
}

function showOrHideErrorMessage(validationResult) {
	var $errorSummary = $('#errorsummary');
	if (validationResult.success) {
		$errorSummary.hide('slow');

	} else {
		var message = loginValidation.getErrorMessage(validationResult.error);
		$errorSummary[0].innerText = message;
		$errorSummary.show('slow');
	}
}

export function init() {
	$('#btnLogin').on('click', function() {
		var credentials = getCredentialsLoginForm();
		var validationResult = loginValidation.validateCredentials(credentials);

		showOrHideErrorMessage(validationResult);
	});
}
