var box =document.querySelector('.box');
var btn = document.querySelector('.btn');
 
var flag = 0; 

btn.addEventListener("click", function(){
    if(flag==0){
        
        box.style.backgroundColor = "yellow"
        console.log("Button is clicked light is on")
        flag=1
    }
    else{
        
        box.style.backgroundColor = "transparent"
        console.log("Button is clicked light is off")
        flag=0
    } 
})