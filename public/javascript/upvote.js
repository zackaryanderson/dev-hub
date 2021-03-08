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

  if (response.ok) {
    document.location.reload();
  } else {
    //alert(response.statusText);
    document.location.reload();
  }
}

document.querySelectorAll(".upvote-btn").forEach(el => {
  el.addEventListener("click", upvoteClickHandler);
});

