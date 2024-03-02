"use strict";


//#region file 
// let input = document.querySelector(".file-input");
// let tbody = document.querySelector("tbody");


// function getBase64FromFile(file){
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     let elem = "";
//     fileReader.onload = (event) =>{
//         elem += `                
//         <tr>
//         <td><img src="${event.target.result}" alt=""></td>
//         <td>${file.name}</td>
//         <td>${file.size / 1024} kB</td>
//         </tr>`
//         console.log(event.target);
//         tbody.innerHTML += elem;
//     }
// }

// input.addEventListener("change",function(e){
//     for (let i = 0; i < e.target.files.length; i++) {
//         const base64 = getBase64FromFile(e.target.files[i]);
//     }
// })



//#endregion



//#region slider

let leftIcon = document.querySelector(".slider .icons .left-icon");
let rightIcon = document.querySelector(".slider .icons .right-icon");


function next() {
    let activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    if(activeImage.nextElementSibling != null){
        activeImage.nextElementSibling.classList.add("active");
    }else{
        rightIcon.parentNode.nextElementSibling.firstElementChild.classList.add("active");
    }
}

function prev() {
    let activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    if(activeImage.previousElementSibling != null){
        activeImage.previousElementSibling.classList.add("active");
    }else{
        leftIcon.parentNode.nextElementSibling.lastElementChild.classList.add("active");
    }
}


rightIcon.addEventListener("click",next)


leftIcon.addEventListener("click",prev)


setInterval(() => {
    next();
}, 2000);



document.querySelector("a").addEventListener("click",function(e){
    e.preventDefault();
})