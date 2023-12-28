const searchBar = document.getElementById("filter");
const userList = document.getElementById("result");

const users = [];
getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  console.log(data);
}
