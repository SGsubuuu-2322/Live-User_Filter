const searchBar = document.getElementById("filter");
const userList = document.getElementById("result");

const listItems = [];
getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  userList.innerHTML = "";
  console.log(results);

  results.forEach((user) => {
    let list = document.createElement("li");
    list.innerHTML = `
    <img
      src="${user.picture.medium}"
      alt="user-image"
    />
    <div class="user-info">
      <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
      <p>${user.location.state}, ${user.location.country}</p>
    </div>
    `;
    userList.appendChild(list);
  });
}
