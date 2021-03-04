//function that will run on submit of the login form, this will send the email and password and check if they exist, if they do they are signed in
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  if (email && password.length >= 8) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}



document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

