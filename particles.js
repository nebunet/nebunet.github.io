let script1 = document.createElement("script");
let script2 = document.createElement("script");
let pj_div = document.createElement("div");

pj_div.id = "particles-js";
pj_div.style =
  "position: absolute;width: 100vw;height:100vh;;overflow-y: hidden;";
document.body.appendChild(pj_div);

script1.src =
  "https://cdn.jsdelivr.net/gh/nebunet/nebunet.github.io/pj_particles.js";
script2.src = "https://cdn.jsdelivr.net/gh/nebunet/nebunet.github.io/pj_app.js";

document.head.appendChild(script1);
document.head.appendChild(script2);
