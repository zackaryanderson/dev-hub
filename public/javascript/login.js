//function that will run on submit of the login form, this will send the username and password and check if they exist, if they do they are signed in
$(".login-form").on("submit", async function (event) {
  event.preventDefault();

  const username = $("#username-login").value.trim();
  const password = $("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
});

//function that will run on submit of the signup form, this will send the username and password and create them in the database
$(".signup-form").on("submit", async function (event) {
  event.preventDefault();

  const username = $("#username-signup").value.trim();
  const password = $("#password-signup").value.trim();

  if (username && password) {
    await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
});
