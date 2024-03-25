function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
function playSound(event) {
    const audioElement = document.getElementById(event.key.toLowerCase());
    const key = document.querySelector(`.key[data-key="${event.key.toLowerCase()}"]`); // Select the corresponding key
    
    if (!audioElement) return;
    if (audioElement) {
      audioElement.currentTime = 0; // Rewind audio to the beginning
      audioElement.play(); //play audio
    }
  
    key.classList.add("playing");
}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);
