document.addEventListener("keydown", (event) => {
    
    let key = event.key

    if (key === "p") {
        console.log("Panic mode activated!")
        document.body.innerHTML = ""
        document.head.innerHTML = ""
        location.replace("https://classroom.google.com/u/0/h")
    }

})
