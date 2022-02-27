const allPlayers = () => {
  document.getElementById("player-container").innerHTML = "";
  document.getElementById("spinner").style.display = "block";

  const searchBox = document.getElementById("search-box").value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.player == null) {
        document.getElementById("spinner").style.display = "block";
      } else {
        showPlayerDetail(data.player);
        document.getElementById("search-box").value = "";
      }
    });
};

const showPlayerDetail = (players) => {
  if (players == "null") {
    document.getElementById("spinner").style.display = "block";
  } else {
    document.getElementById("spinner").style.display = "none";

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
          <button class="delete-btn btn btn-danger">Delete</button>
          <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
        </div>
      </div>
    `;
      parent.appendChild(div);
      const allDetailsBtn = document.getElementsByClassName("delete-btn");
      for (const button of allDetailsBtn) {
        button.addEventListener("click", (e) => {
          e.target.parentNode.parentNode.style.display = "none";
        });
      }
    }
  }
};

const details = (id) => {
  console.log("id=", id);
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setDetalis(data.players[0]));
};

const setDetalis = (info) => {
  console.log("info", info.strGender);
  if (info.strGender == "Male") {
    document.getElementById("male").style.display = "block";
    document.getElementById("female").style.display = "none";
  } else {
    document.getElementById("male").style.display = "none";
    document.getElementById("female").style.display = "block";
  }
  document.getElementById("details-container").innerHTML = `
  <div>
    <img class="w-50" src="${info.strThumb}" />
    <h1>Name: ${info.strPlayer}</h1>
    <h2>Country: ${info.strNationality}</h2>
    <h3>Club: ${info.strTeam}</h3>
    <h4>Birth Info: ${info.dateBorn}, at ${info.strBirthLocation}</h4>
    <p>Description: ${info.strDescriptionEN.slice(0, 100)}</p>

  </div>
  `;
};
