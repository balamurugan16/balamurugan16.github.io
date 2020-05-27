window.addEventListener('keydown',playSound);
function playSound(e){
     let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);    
     let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
     if(!audio){return;}
     audio.currentTime = 0;
     key.classList.add('playing');
     audio.play();
}
let keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key)=>key.addEventListener('transitionend',removeTransition));

function removeTransition(e){
     if (e.propertyName !== 'transform'){
          return;
     }
     e.target.classList.remove('playing');
}
