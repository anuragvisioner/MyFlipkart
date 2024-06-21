// Function to handle sign-in button click
function handleSignIn() {
    // Create a div for the sign-in form
    const signInFormDiv = document.createElement('div');
    signInFormDiv.id = 'signInForm';
    signInFormDiv.style.position = 'fixed';
    signInFormDiv.style.top = '50%';
    signInFormDiv.style.left = '50%';
    signInFormDiv.style.transform = 'translate(-50%, -50%)';
    signInFormDiv.style.background = 'white';
    signInFormDiv.style.padding = '20px';
    signInFormDiv.style.border = '1px solid #ccc';
    signInFormDiv.style.zIndex = '1000';

    // Form elements
    const signInFormHtml = `
        <h2 style="text-align: center;">Sign In</h2>
        <label for="mobile">Mobile Number:</label><br>
        <input type="text" id="mobile" style="width: 100%; padding: 8px; margin-bottom: 10px;"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" style="width: 100%; padding: 8px; margin-bottom: 10px;"><br>
        <label for="captcha">Captcha:</label><br>
        <input type="text" id="captcha" style="width: 100%; padding: 8px; margin-bottom: 10px;"><br>
        <button id="signInSubmit" style="width: 100%; padding: 10px; margin-top: 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">Submit</button>
        <button id="signInCancel" style="width: 100%; padding: 10px; margin-top: 10px; background-color: #f44336; color: white; border: none; cursor: pointer;">Cancel</button>
    `;

    signInFormDiv.innerHTML = signInFormHtml;
    document.body.appendChild(signInFormDiv);

    // Event listeners for submit and cancel buttons
    const signInSubmitBtn = document.getElementById('signInSubmit');
    signInSubmitBtn.addEventListener('click', function() {
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password').value;
        const captcha = document.getElementById('captcha').value;

        if (mobile && password && captcha) {
            alert('Sign-In Successful!'); // Replace with actual sign-in logic
            signInFormDiv.remove();
        } else {
            alert('Please fill in all fields.');
        }
    });

    const signInCancelBtn = document.getElementById('signInCancel');
    signInCancelBtn.addEventListener('click', function() {
        signInFormDiv.remove();
    });
}

// Function to handle become a seller button click
function handleBecomeSeller() {
    // Prompt to enter seller rating
    const rating = prompt('Enter your seller rating:');
    if (rating) {
        alert(`Your rating is ${rating}`); // Replace with actual seller logic
    } else {
        alert('Rating is required.');
    }
}

// Function to handle cart button click
function handleCart() {
    alert('Cart button clicked!');
    // Add your cart logic here
}

// Function to handle any other button click
function handleButtonClick(buttonName) {
    alert(buttonName + ' button clicked!');
    // Add your logic for other buttons here
}

// Adding event listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sign-in button event listener
    const signInButton = document.querySelector('.sign-in-button');
    if (signInButton) {
        signInButton.addEventListener('click', handleSignIn);
    }

    // Become a seller button event listener
    const becomeSellerButton = document.querySelector('.become_a_seller a');
    if (becomeSellerButton) {
        becomeSellerButton.addEventListener('click', handleBecomeSeller);
    }

    // Cart button event listener
    const cartButton = document.querySelector('.cart a');
    if (cartButton) {
        cartButton.addEventListener('click', handleCart);
    }

    // Add event listeners for other buttons if needed
    // Example: 
    // const otherButton = document.querySelector('#otherButtonId');
    // if (otherButton) {
    //     otherButton.addEventListener('click', function() {
    //         handleButtonClick('Other Button');
    //     });
    // }
});
