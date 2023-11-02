const imageList=[
    "./img/04.webp",
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/05.webp",

]

let imageWrapper = document.getElementById("imgwrapper");
 
for(i=0; i < imageList.length; i++){
    let image=document.createElement("img");
    image.src= imageList[i];
    imageWrapper.append(image)
    

}





// First image block
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
    else{
        images[currentImage].classList.remove("block");
        currentImage=0;
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
    else{
        images[currentImage].classList.remove("block");
        currentImage=images.length-1;
        images[currentImage].classList.add("block");

    }


   
})