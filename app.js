const allPlayers = () => {
  const searchBox = document.getElementById("search-box").value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayerDetail(data.player));
};

const showPlayerDetail = (players) => {
  const parent = document.getElementById("player-container");
  for (const player of players) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card border p-5">
        <div class="pro-pic">
          <img class="w-25" src="" alt="" srcset="" />
        </div>
        <h2>Name:</h2>
        <h5>COuntry:</h5>
        <p></p>
        <div class="allButton">
          <button class="btn btn-danger">Delete</button>
          <button class="btn btn-success">Details</button>
        </div>
      </div>
    `;
    parent.appendChild(div);
  }
  console.log(players);
};
