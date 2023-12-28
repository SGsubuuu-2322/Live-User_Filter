const searchBar = document.getElementById("filter");
const userList = document.getElementById("result");

const listItems = [];
getData();

searchBar.addEventListener("input", (e) => filterResults(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  userList.innerHTML = "";
  //   console.log(results);

  results.forEach((user) => {
    let list = document.createElement("li");
    listItems.push(list);
    list.innerHTML = `
    <img
      src="${user.picture.medium}"
      alt="${user.name.first}"
    />
    <div class="user-info">
      <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    userList.appendChild(list);
  });
}

function filterResults(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
