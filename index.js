
//Value to show at the begining
document.querySelector(".Box1").innerHTML = "Width: " + window.innerWidth + "px";
document.querySelector(".Box2").innerHTML = "Height: " + window.innerHeight + "px";

//Update the Value
window.addEventListener("resize" , function(){
    document.querySelector(".Box1").innerHTML = "Width: " + window.innerWidth + "px";;
    document.querySelector(".Box2").innerHTML = "Height: " + window.innerHeight + "px"
})

//Preventing right-click
document.querySelector(".Box1").addEventListener("contextmenu" , function(e){
    e.preventDefault();
    alert("Right-click is disabled!! :(")
})

//Preventing left-click
document.querySelector(".Box2").addEventListener("click" , function(e){
    if(e.button === 0){
        e.preventDefault();
        alert("Left-click is disabled!! :(")
    }
})
