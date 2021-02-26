$(".edit-post-form").on("submit", async function (event) {
  event.preventDefault();

  const title = $('input[name="post-title"]').value.trim();
  const post = $('input[name="post"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
});
