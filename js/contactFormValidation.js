
/**
 * This function pulls values from input fields and 
 * checks if they are empty or not and if the value is valid
 * if empty it will show an specific or complete error
 * and enable the submit button if 
 * it also checks if the checkbox is checked
 * @param {event} prevents the form in getting empty instantly
 * @returns void 
 */
function validateContactForm(event) {
    let name = document.getElementById("nameInput");
    let email = document.getElementById("emailInput");
    let message = document.getElementById("helpInput");
    let checkboxError = document.getElementById("errorDivCheckbox");
    if (name.value == "" && email.value == "" && message.value == "") {
        showErrorComplete();
    }
    if (name.value == "" || email.value == "" || message.value == "") {
        showSpecificError(name, email, message);
    }
    if (validateNameField() && validateEmailField() && validateMessageField() && validateCheckBox()) {
        submitInfo(event);
        document.getElementById("sendButton").disabled = true;
    }
}

/**
 * Here after the validation is complete and true, a object is created with the values from the input fields
 * after that the object is passed to the fetch function
 * @param {event} the event comes from the submit button and is used here to prevent Default
 * @returns void 
 */
function submitInfo(event) {
    event.preventDefault();
    console.log("submit");
    let name = document.getElementById("nameInput");
    let email = document.getElementById("emailInput");
    let message = document.getElementById("helpInput");
    document.getElementById("agreeBox").checked = false;
    const data = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    postAndShowSuccessMessage();
}

/**
 * This function is used to send the data to formspree.io, uses the method POST
 * after it is posted the function clears the fields and shows a success message, 
 * removes the message after 3 seconds and catches any errors
 * @returns void
 */
function postAndShowSuccessMessage() {
    fetch("https://formspree.io/f/mjglvngj", {
        method: "POST",
        body: JSON.stringify(data), //data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        emptyFields();
        document.querySelector('.submittedFeedback').classList.add('success');
        setTimeout(() => {
            document.querySelector('.submittedFeedback').classList.remove('success');
        }, 3000);
    }).catch((error) => {
        console.log(error);
    });
}

/**
 * This function clears the input fields
 * @returns void
 */
function emptyFields() {
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("helpInput").value = "";
}


/**
 * This function shows the error message for the input fields, if all fields are empty
 * @returns void
 */
function showErrorComplete() {
    let nameError = document.getElementById("errorDivName");
    let emailError = document.getElementById("errorDivEmail");
    let messageError = document.getElementById("errorDivMessage");
    nameError.style.color = "rgba(236, 123, 123, 0.8)";
    nameError.innerHTML = "Please enter your name";
    emailError.style.color = "rgba(236, 123, 123, 0.8)";
    emailError.innerHTML = "Please enter your email";
    messageError.style.color = "rgba(236, 123, 123, 0.8)";
    messageError.innerHTML = "Please enter your message";
}

/**
 * This function checks with if statements if one specific field is empty, or if two fields are empty
 * in order to meet every case
 * @param {name} name the value from the name input 
 * @param {email} email the value from the email input
 * @param {message} message the value from the message input
 * @returns void 
 */
function showSpecificError(name, email, message) {
    let nameError = document.getElementById("errorDivName");
    let emailError = document.getElementById("errorDivEmail");
    let messageError = document.getElementById("errorDivMessage");
    showErrorOnOneField(name, email, message);
    showErrorOnTwoFields(name, email, message);
}

/**
 * 
 * @param {name} name name input value again, is used to check empty fields
 * @param {*} email email input value again, is used to check empty fields
 * @param {*} message message input value again, is used to check empty fields
 */
function showErrorOnOneField(name, email, message) {
    if (name.value == "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter your name";
    }
    if (email.value == "") {
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter your email";
    }
    if (message.value == "") {
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter your message";
    }
}

/**
 * 
 * @param {name} name here we check two field at the same time to catch the error 
 * @param {email} email 
 * @param {message} message
 * @returns void 
 */
function showErrorOnTwoFields(name, email, message) {
    if (name.value == "" && email.value == "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter your name";
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter your email";}
    if (name.value == "" && message.value == "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter your name";
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter your message";}
    if (email.value == "" && message.value == "") {
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter your email";
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter your message";}
}


/**
 * This function validates the name field, check if the name is incorrect or empty
 * if incorrect it will show the error message
 * if empty it will show the error message and if it is correct it clears the error message
 * @returns void
 */
function validateNameField() {
    let name = document.getElementById("nameInput");
    let nameError = document.getElementById("errorDivName");
    if (!validateName(name) && name.value != "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter a correct name";
        return false
    } else if (name.value == "") {
        nameError.innerHTML = "Please enter your name";
    } else if (validateName(name) && name.value != "") {
        nameError.innerHTML = "";
    }
    checkAllFieldAfterValidation();
}

/**
 * This function checks if all fields are filled and if they are it will enable the submit button
 * @returns {boolean} true or false
 */
function checkAllFieldAfterValidation() {
    if (checkAllFields()) {
        document.getElementById("sendButton").disabled = false;
        return true;
    } else {
        document.getElementById("sendButton").disabled = true;
        return false;
    }
}

/**
 * This function validates the email field, check if the email is incorrect or empty
 * if incorrect it will show the error message
 * if empty it will show the error message and if it is correct it clears the error message
 * and after validation it checks if all fields are filled in case it is the last empty field
 * and enables the submit button
 * @returns void
 */
function validateEmailField() {
    let email = document.getElementById("emailInput");
    let emailError = document.getElementById("errorDivEmail");
    if (!validateEmail(email) && email.value != "") {
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter a correct email";
    } else if (email.value == "") {
        emailError.innerHTML = "Please enter your email";
    } else if (validateEmail(email) && email.value != "") {
        emailError.innerHTML = "";
    }
    checkAllFieldAfterValidation();
}

/**
 * This function validates the message field, check if the message is incorrect or empty
 * if incorrect it will show the error message
 * if empty it will show the error message and if it is correct it clears the error message
 * and after validation it checks if all fields are filled in case it is the last empty field
 * and enables the submit button
 * @returns void
 */
function validateMessageField() {
    let message = document.getElementById("helpInput");
    let messageError = document.getElementById("errorDivMessage");
    if (!validateMessage(message) && message.value != "") {
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter a correct message";
    } else if (message.value == "") {
        messageError.innerHTML = "Please enter your message";
    } else if (validateMessage(message) && message.value != "") {
        messageError.innerHTML = "";
    }
    checkAllFieldAfterValidation();
}

/**
 * This function checks if the checkbox is checked and if it is not it will show the error message
 * if it is checked it will clear the error message
 * after validation it checks if all fields are filled in case it is the last missing piece to complete the form
 * and enables the submit button if so
 * @returns {boolean} true or false
 */
function validateCheckBox() {
    let checkbox = document.getElementById("agreeBox");
    if (checkbox.checked == false) {
        showCheckboxError();
    } else { clearCheckboxError(); }
    if (checkAllFields()) {
        clearCheckboxError();
        document.getElementById("sendButton").disabled = false;
        return true;
    } else {
        document.getElementById("sendButton").disabled = true;
    }
}

/**
 * This function shows the error message for the checkbox
 * @returns void
 */
function showCheckboxError() {
    let checkbox = document.getElementById("agreeBox");
    checkbox.classList.add('agreeBoxError')
    let checkboxError = document.getElementById("errorDivCheckbox");
    checkboxError.innerHTML = "Please agree to the privacy policy";
}
 
/**
 * This function clears the error message for the checkbox
 * @returns void
 */
function clearCheckboxError() {
    let checkbox = document.getElementById("agreeBox");
    checkbox.classList.remove('agreeBoxError')
    let checkboxError = document.getElementById("errorDivCheckbox");
    checkboxError.innerHTML = "";
}


/**
 * This function checks if all fields are filled in after every validation
 * in case it is the last missing piece to complete the form and enables the submit button if so
 * @returns {boolean} true or false
 */
function checkAllFields() {
    let name = document.getElementById("nameInput");
    let email = document.getElementById("emailInput");
    let message = document.getElementById("helpInput");
    let checkbox = document.getElementById("agreeBox");
    if (name.value != "" && email.value != "" && message.value != "" && checkbox.checked == true) {
        document.getElementById("sendButton").disabled = false;
        return true;
    } else {
        document.getElementById("sendButton").disabled = true;
    }
}


/**
 * here we check the name field value with with a regular expression (RegExp)
 * @param {name} name the value from the name input
 * @returns {boolean}
 */
function validateName(name) {
    const titleRegex = /^[A-Za-zÄÖÜäöüß\s.-]+$/;
    return titleRegex.test(name.value.trim());

}

/**
 * This function checks the email field value with with a regular expression (RegExp)
 * @param {email} email the value from the email input
 * @returns {boolean}
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]{3,}\.[^\s@]{2,}$/;
    return regex.test(email.value.trim());
}

/**
 * This function checks the message field value with with a regular expression (RegExp)
 * @param {message} message the value from the message input
 * @returns void
 */
function validateMessage(message) {
    const messageRegex = /^[A-Za-zÄÖÜäöüß0-9\s.\-?!,;:'"()@#&/\\]+$/;
    return messageRegex.test(message.value.trim());

}

/**
 * This function stops the propagation of the onclick event
 * @param {event} event
 * @returns void 
 */
function stopPropagation(event) {
    event.stopPropagation();
}