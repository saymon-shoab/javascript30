
const playSound = (e) => {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
      audio.currentTime= 0;
      audio.play()
      key.classList.add('playing')
      this.setTimeout(()=>{
        key.classList.remove('playing')
      },1000)
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keyup', playSound)