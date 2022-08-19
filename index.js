
var numofButtons=document.querySelectorAll(".drum").length;
for(var i=0; i<numofButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{

    var buttoninnerHTML=this.innerHTML;

  
makesound(buttoninnerHTML);

makeButtonAnimation(buttoninnerHTML);
   

   
});

document.addEventListener("keypress",function(event)
{
    makesound(event.key); 

    makeButtonAnimation(event.key);    
});

function makesound(key)
{
    switch (key) {
        case "w":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();

            break;
        case 's':
            
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();

            break;
        case 'd':
            
            var audio=new Audio('sounds/snare.mp3');
            audio.play();

            break;
        case 'j':
            
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();

            break;
        case 'k':
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();

            break;
            
        case 'l':
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();

            
            
        break;

 
}

}
}

function makeButtonAnimation(currentKey)
{
var activebutton=document.querySelector('.'+ currentKey);
activebutton.classList.add("pressed");

setTimeout(function ()
{
    activebutton.classList.remove("pressed");
},100);
}

 