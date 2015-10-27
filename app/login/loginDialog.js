import $ from 'jquery';
import * as loginBusiness from './loginBusiness';

export function init() {
	$('#btnLogin').on('click', function() {
		var credentials = getCredentialsLoginForm();
		var validationResult = loginBusiness.validateCredentials(credentials);

		showOrHideErrorMessage(validationResult);
	});
}

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
    var message = loginBusiness.getErrorMessage(validationResult.error);
    $errorSummary[0].innerText = message;
    $errorSummary.show('slow');
  }
}
