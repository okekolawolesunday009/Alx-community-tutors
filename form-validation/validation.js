


const form = document.getElementById('registration');




form.addEventListener('submit', function (event) {

    event.preventDefault()

    const nameInput = document.getElementById('fullname').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;


    const nameFeedback = document.getElementById('nameError');
    const emailFeedback = document.getElementById('emailError');
    const passwordFeedback = document.getElementById('passwordError');


    //name greater 2
    //email conatins a @ & a dot
    // pasword should have atleast Capital Letter, small letter and numbers


    if (nameInput.length < 2) {
        nameFeedback.textContent = "Name field should be greater than 2";
    } else {
        nameFeedback.textContent = "";

    }


    if (!emailInput.includes("@") && !emailInput.includes('.')) {
        emailFeedback.textContent = "Your email should include @ && .";
    } else {
        emailFeedback.textContent = "";
    }


    if (passwordInput.length < 6) {
        passwordFeedback.textContent = "Password should be grater than 6";


    } else {
        passwordFeedback.textContent ="";
    }


    // console.log(nameInput, emailInput, passwordInput);
})
