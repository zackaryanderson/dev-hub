async function deleteFormHandler(event) {
  event.preventDefault();

  // const id = window.location.toString().split("/")[
  //   window.location.toString().split("/").length - 1
  // ];
  id = event.target.parentNode.parentNode.id;
  console.log(id);

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    onDelete: "CASCADE"
  });

  if (response.ok) {
    document.location.replace("/userpage");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelectorAll(".delete-post-btn").forEach(btn => {
  btn.addEventListener("click", deleteFormHandler)
});
