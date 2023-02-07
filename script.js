
//You can edit ALL of the code here

function setup() {
  // ------- setup page in three pages
  root.append(header, main, footer);

  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  // root.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
const header=document.createElement("header");
const main=document.createElement("main");
const footer=document.createElement("footer");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

const ShowAllEpisodes=(myEpisodes)=>{



}
window.onload = setup;
