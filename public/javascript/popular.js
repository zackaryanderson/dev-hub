async function populateUsers() {
  const response = await fetch("/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log(response);
    // sort array in order of most followers
    const sortedResponse = response.sort((a, b) => b.following - a.following);
    for (i = 0; i < sortedResponse.length; i++) {
      var userLi = document.createElement("li");
      userLi.innerHTML = `
      <article class="user">
        <div class="username">
            <div">${sortedResponse[i].username}</div>
        </div>
        <div class="followers">
        ${sortedResponse[i].following}
        </div>
      </article>
      `;
      $("#user-ctn").append(userLi);
    }
  } else {
    alert(response.statusText);
  }
}
