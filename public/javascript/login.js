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
      console.log(response.data);
      //remove alert if already there so it doesnt stack
      if (document.querySelector(".alert")){
        document.querySelector(".alert").remove();
      }
      //alert of wrong password
      const wrongPass = document.createElement("div");
      wrongPass.classList.add("alert");
      wrongPass.classList.add("alert-danger");
      wrongPass.setAttribute("style","transition: width 0.5s");
      wrongPass.textContent = "Incorrect Password";
      document.querySelector(".pass").appendChild(wrongPass);
    }
  }
}



document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

