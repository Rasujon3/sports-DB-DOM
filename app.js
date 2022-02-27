const allPlayers = () => {
  const searchBox = document.getElementById("search-box").value;
  console.log(searchBox);
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;
  console.log("url", url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
