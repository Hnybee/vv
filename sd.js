window.addEventListener("scroll",()=>{
    var some = document.querySelector(".btn")
    if(window.scrollY > 100){
        some.style.display = "flex"
    }else{
        some.style.display = "none"
    }
})
var one = document.querySelector(".nav")
var two = document.querySelector(".x-icon")
var three = document.querySelector(".first-pic")
two.addEventListener("click", function(){
    if(one.style.display==="none"){
        one.style.display="block";
    }else{
        one.style.display="none"
        three.style.height= 50
    }
})
