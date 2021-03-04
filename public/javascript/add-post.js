async function newPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
  const check = document.querySelector('.newpost-btn').id;
  let code_help = '';
  if (check === "new-post-submit-codehelpfalse") {
    code_help = false;
  } else {
    code_help = true;
  }

  const response = await fetch('/api/posts', {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      code_help
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.newpost-btn').addEventListener('click', newPostHandler);
