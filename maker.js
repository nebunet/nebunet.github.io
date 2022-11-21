function openGame(url) {
  var tab_names = ["New Tab", "Loading...", "Redirecting..."];
  var win = window.open();
  var iframe = win.document.createElement("iframe");
  var body = win.document.body;

  win.document.title = tab_names[Math.floor(Math.random() * 3)];

  body.style.margin = 0;
  iframe.style.position = "flex";
  iframe.style.height = "100%";
  iframe.style.width = "100%";
  iframe.style.alignItems = "center";
  iframe.style.justifyContent = "center";
  iframe.style.border = "none";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}

function returnGrid(genere) {
  if (genere === "featured") {
    return "1";
  } else if (genere === "new") {
    return "2";
  } else if (genere === "platformer" || genere === "adventure") {
    return "3";
  } else if (genere === "action" || genere === "shooter") {
    return "4";
  } else if (genere === "strategy") {
    return "5";
  } else if (genere === "rpg") {
    return "6";
  } else if (genere === "sports" || genere === "simulation") {
    return "7";
  } else if (genere === "puzzle") {
    return "8";
  } else if (genere === "miscellaneous") {
    return "9";
  }
}

function makeGameDiv(name, native, url, thumbnail, genere) {
  var tnail = "https://nebunet.bitbucket.io/Storage/Thumbnails/";
  var div = document.createElement("div");
  var style = "background: url('" + tnail + thumbnail + "') 0% 0% / cover;";

  div.style = style;
  div.className = "g-item";

  div.addEventListener("click", function() {
    if (native === "true") {
      openGame("https://nebunet.bitbucket.io/Storage/Games/" + url);
    } else {
      openGame(url);
    }
  })

  var item = document.getElementById(returnGrid(genere))

  item.appendChild(div);
    
}

async function getList() {
  
  const req = new Request('https://nebunet.bitbucket.io/Storage/Latest/manifest/games.json')
  var g = await fetch(req);
  g = await g.json();

  for (var i = 0; i < Object.keys(g).length; i++) {
  
  var current = Object.keys(g)[i];

  makeGameDiv(current, g[current].native, g[current].link, g[current].image, g[current].genere);

  }

}

getList();
