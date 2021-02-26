// when logout button is clicked the session will be destroyed and user will be rerouted to homepage
$("#logout").on("click", async function () {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
});
