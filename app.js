const allPlayers = () => {
  const searchBox = document.getElementById("search-box").value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayerDetail(data.player));
};

const showPlayerDetail = (players) => {
  for (const player of players) {
    const parent = document.getElementById("player-container");

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card border p-5">
        <div class="pro-pic">
          <img class="w-50" src="${player.strThumb}" />
        </div>
        <h2>Name: ${player.strPlayer}</h2>
        <h5>Country: ${player.strNationality}</h5>
        <p>${player.strPlayer}</p>
        <div class="allButton">
          <button class="btn btn-danger">Delete</button>
          <button onclick="details(${player.idPlayer})" class="btn btn-success">Details</button>
        </div>
      </div>
    `;
    parent.appendChild(div);
  }
  console.log(players);
};

const details = (id) => {
  console.log("id=", id);
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.players));
};
