//function that will run on submit of the login form, this will send the email and password and check if they exist, if they do they are signed in
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  //if email and password exsist
  if (email && password) {
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
      //console.log(response.data);//<==================================
      let data = {};
      response.json().then((responseData) => {
        data = responseData;

        //remove alert if already there so it doesnt stack
        if (document.querySelector(".alert")) {
          document.querySelector(".alert").remove();
        }

        if (responseData.message === "Incorrect password!") {
          //if wrong password alert of wrong password
          const wrongPass = document.createElement("div");
          wrongPass.classList.add("alert");
          wrongPass.classList.add("alert-danger");
          wrongPass.setAttribute("style", "transition: width 0.5s");
          wrongPass.textContent = "Incorrect Password";
          document.querySelector(".pass").appendChild(wrongPass);
        } else {
          //if bad email alert bad email
          const userNotFound = document.createElement("div");
          userNotFound.classList.add("alert");
          userNotFound.classList.add("alert-danger");
          userNotFound.setAttribute("style", "transition: width 0.5s");
          userNotFound.textContent = "User Not Found";
          document.querySelector(".email").appendChild(userNotFound);
        }
      });
    }
  } else {
    //if there is no username or password
    alert("Please Enter a Username and Password");
  }
}



document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

