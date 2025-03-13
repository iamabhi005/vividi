document.querySelector(".letter").addEventListener("click", function() {
    this.style.color = "red";
    this.style.textShadow = "0 0 20px red, 0 0 40px darkred";

    setTimeout(() => {
        this.style.color = "white";
        this.style.textShadow = "0 0 20px cyan, 0 0 40px blue";
    }, 500);
});


document.getElementById("loginButton").addEventListener("click", function() {
    this.classList.add("clicked");

    setTimeout(() => {
        this.classList.remove("clicked");
    }, 300);
});
