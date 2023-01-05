function get(key) {
  return localStorage.getItem(key);
}

let disguise = get("ftd");

let title = document.createElement("title");
let icon = document.createElement("link");
icon.rel = "icon";

if (disguise) {
  title.innerHTML = disguise;

  if (disguise === "New Tab") {
    icon.href =
      "https://raw.githubusercontent.com/chromium/chromium/main/chrome/app/theme/default_200_percent/common/favicon_ntp.png";
  } else if (disguise === "Classes") {
    icon.href = "https://ssl.gstatic.com/classroom/favicon.png";
  } else if (disguise === "Google") {
    icon.href = "https://www.google.com/favicon.ico";
  }
} else {
  title.innerHTML = "Classes";
  icon.href = "https://ssl.gstatic.com/classroom/favicon.png";
}

document.head.appendChild(title);
document.head.appendChild(icon);

document.addEventListener("keydown", (event) => {
    
    let key = event.key

    if (key === "p") {
        console.log("Panic mode activated!")
        document.body.innerHTML = ""
        document.head.innerHTML = ""
        location.replace("https://classroom.google.com/u/0/h")
    }

})
