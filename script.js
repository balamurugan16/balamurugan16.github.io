window.addEventListener('keydown',playSound);
let keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key=>key.addEventListener('click',playsound2))
keys.forEach(key=>key.addEventListener('touchstart',playsound2))
function playsound2(e){
     let value = this.getAttribute('data-key'); 
     let audio = document.querySelector(`audio[data-key="${value}"]`)    
     audio.currentTime = 0;
     this.classList.add('playing');
     audio.play();
}
function playSound(e){
     let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);    
     let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
     if(!audio){return;}
     audio.currentTime = 0;
     key.classList.add('playing');
     audio.play();
}

keys.forEach((key)=>key.addEventListener('transitionend',removeTransition));

function removeTransition(e){
     if (e.propertyName !== 'transform'){
          return;
     }
     e.target.classList.remove('playing');
}
