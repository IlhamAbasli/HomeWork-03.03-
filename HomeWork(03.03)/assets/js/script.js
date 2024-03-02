"use strict";

let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");



rightIcon.addEventListener("click",function(){
    let activeImage = document.querySelector(".active");
    activeImage.className = "";
    if(activeImage.nextElementSibling != null){
        activeImage.nextElementSibling.className = "active right";
    }else{
        this.parentNode.nextElementSibling.firstElementChild.className = "active right";
    }
})




leftIcon.addEventListener("click",function(){
    let activeImage = document.querySelector(".active");
    activeImage.className = "";
    if(activeImage.previousElementSibling != null){
        activeImage.previousElementSibling.className = "active left";
    }else{
        this.parentNode.nextElementSibling.lastElementChild.className = "active left";
    }
})

