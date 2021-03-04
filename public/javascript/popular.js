async function populateUsers() {
  const response = await fetch("/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // sort array in order of most followers
    let data = {};
    let sortedResponse = [];
    response.json().then((responseData) => {
      data = responseData;
      //console.log(responseData);
      sortedResponse = responseData.sort((a, b) => b.following - a.following);
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
    });
  } else {
    console.log("this is a test");
    alert(response.statusText);
  }
}

populateUsers();
