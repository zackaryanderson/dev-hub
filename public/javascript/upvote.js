async function upvoteClickHandler(event) {
  event.preventDefault();

  let id = '';

  if (window.location.pathname === '/' || window.location.pathname === '/codehelp' || window.location.pathname === '/userpage') {
    // id = document.querySelector(".card-title").id;
    id = event.target.parentNode.parentNode.id;
    console.log(id);
  } else {
    id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  }

  const response = await fetch("/api/posts/upvote", {
    method: "PUT",
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 500) {
    document.location.reload();
  } else {
    //alert(response.statusText);
    //document.location.reload();
    if (document.querySelector(".alert")) {
      document.querySelector(".alert").remove();
    }

    const newAlert = document.createElement("div");
    newAlert.classList.add("alert");
    newAlert.classList.add("alert-danger");
    newAlert.setAttribute("style", "margin-top: 5px");
    newAlert.textContent = "Please Login to Like a Post";
    document.querySelector(".footer").appendChild(newAlert);
  }
}

document.querySelectorAll(".upvote-btn").forEach(el => {
  el.addEventListener("click", upvoteClickHandler);
});

