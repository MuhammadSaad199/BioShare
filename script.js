let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// function MoreLess(){
//     var dots= document.getElementsByClassName("dots");
//     var invisible=document.getElementsByClassName("invisible");
//     var btn=document.getElementsByClassName("btn");
//     if (dots.style.display!="none"){
//         dots.style.display="none";
//         invisible.style.display="inline";
//         btn.innerHTML="Read Less";
//     }
// }


// function moreless() {
//     var dots = document.getElementsByClassName("dots");
//     var invisible = document.getElementsByClassName("invisible");
//     var btn = document.getElementsByClassName("btn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btn.innerHTML = "Read more";
//       invisible.style.display = "none";
//     } 
    
//   }


//   function MoreLess() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("invisible");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }

// let more =document.querySelectorAll(".invidible");
// for(let i=0; i<more.length;i++){
//     more[i].addEventListener("click", function(){
//     more[i].parentNode.classList.toggle("active")
// })
// }

$(document).ready(function(){
    $(".btn").click(function(){
       $(this).prev().toggle();
       $(this).siblings('.dots').toggle();
       if($(this).text()=='read less'){
     $(this).text('read  more');
       }
       else{
     $(this).text('read less');
       }
    });
 });