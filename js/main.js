let currentImage = 0;
const images = document.querySelectorAll("#imgwrapper img");
images[currentImage].classList.add("block");

document.getElementById("btnnext").addEventListener("click", function () {
    console.log("avanti");

    if (currentImage < images.length-1) {
        images[currentImage].classList.remove("block");
        currentImage++;
        images[currentImage].classList.add("block");
    }

});

document.getElementById("btnprevious").addEventListener("click", function(){
    console.log("indietro");
    
    if (currentImage > 0) {
        images[currentImage].classList.remove("block");
        currentImage--;
        images[currentImage].classList.add("block");
    }

   
})