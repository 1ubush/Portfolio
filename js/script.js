window.onload = function() {
   let x = document.querySelector("#myTopnav");
   document.querySelector("#menu").onclick = function(){
        x.classList.toggle('responsive');
   }
}
document.querySelector('button').onclick = function() {
   this.style.background = "brown";
}