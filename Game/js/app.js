
var character = document.getElementById('character');
var left = 0;

document.body.onkeydown = (e) => {
    
    if(e.keyCode === 39){
        left+=5;
        console.log(left);
        
        character.style.left = `${left}px`;
    }
}