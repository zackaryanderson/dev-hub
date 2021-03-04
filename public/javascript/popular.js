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
      //restrict to 8 users on popular page
      let size = '';
      if (sortedResponse > 8) {
        size = 8;
      } else {
        size = sortedResponse.length;
      }

      for (i = 0; i < size; i++) {
        var userLi = document.createElement("li");
        userLi.innerHTML = `
        <li class="list-group-item">
          <a href="userpage/${sortedResponse[i].id}">${sortedResponse[i].username}</a>
        </li>
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
