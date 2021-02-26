$(".new-post-form").on("submit", async function (event) {
  event.preventDefault();

  const title = $('input[name="post-title"]').value;
  const post = $('input[name="post"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
});
