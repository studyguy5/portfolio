
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


function emptyFields() {
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("helpInput").value = "";
}

function showCheckboxError() {
    let checkbox = document.getElementById("agreeBox");
    checkbox.classList.add('agreeBoxError')
    let checkboxError = document.getElementById("errorDivCheckbox");
    checkboxError.style.color = "rgba(236, 123, 123, 0.8)";
    checkboxError.innerHTML = "Please accept the terms and conditions";

}


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

function showSpecificError(name, email, message) {
    let nameError = document.getElementById("errorDivName");
    let emailError = document.getElementById("errorDivEmail");
    let messageError = document.getElementById("errorDivMessage");
    showErrorOnOneField(name, email, message);
    showErrorOnTwoFields(name, email, message);
}

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

function checkAllFieldAfterValidation() {
    if (checkAllFields()) {
        document.getElementById("sendButton").disabled = false;
        return true;
    } else {
        document.getElementById("sendButton").disabled = true;
        return false;
    }
}

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

function clearCheckboxError() {
    let checkbox = document.getElementById("agreeBox");
    checkbox.classList.remove('agreeBoxError')
    let checkboxError = document.getElementById("errorDivCheckbox");
    checkboxError.innerHTML = "";
}



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



function validateName(name) {
    const titleRegex = /^[A-Za-zÄÖÜäöüß\s.-]+$/;
    return titleRegex.test(name.value.trim());

}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]{3,}\.[^\s@]{2,}$/;
    return regex.test(email.value.trim());
}

function validateMessage(message) {
    const messageRegex = /^[A-Za-zÄÖÜäöüß\s.-]+$/;
    return messageRegex.test(message.value.trim());

}

function stopPropagation(event) {
    event.stopPropagation();
}