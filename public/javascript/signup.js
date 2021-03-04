//function that will run on submit of the signup form, this will send the username and password and create them in the database
async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector("#email-signup").value.trim();
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "post",
            body: JSON.stringify({
                email,
                username,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            console.log("success");
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
