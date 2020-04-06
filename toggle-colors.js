var button = document.querySelector("button");
var isPurple = false;

// v1
button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.background = "purple";
        isPurple = false;
    } else {
        document.body.style.background = "white";
        isPurple = true;
    }
});

// v2
button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.background = "white";
    } else{
        document.body.style.background = "purple";
    }
    isPurple = !isPurple;
});

// v3
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});