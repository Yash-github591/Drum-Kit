document.addEventListener("keydown",function(event){
    buttonanimation(event.key);
    makesound(event.key);
});
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    var key=document.querySelectorAll(".drum")[i];
    key.addEventListener("click",function()
    {
        buttonanimation(this.innerHTML);
        makesound(this.innerHTML);
    });
}
function buttonanimation(currentbutton)
{
    var activebutton=document.querySelector("."+currentbutton);
    activebutton.classList.add("pressed");
    setTimeout(function()
    {
        activebutton.classList.remove("pressed");    
    },100);
    // console.log(activebutton);
}
function makesound(key)
{
    var btnhtml=key;
    switch(btnhtml)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        break;   
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;   
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;   
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;   
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;   
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;   
        case"l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;   
        default:         
            console.log("Wrong key!");
    }
}