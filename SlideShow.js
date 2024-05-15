let Indexslide = 0;
showSlideshow();

function showSlideshow() {
    let slides = document.getElementsByClassName("slider-show");

    for( i= 0 ;i < slides.length; i++ ) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slider")
    }
    Indexslide ++;

    if(Indexslide > slides.length){
        Indexslide = 1
    }
        slides[Indexslide - 1].style.display = "block";
        slides[Indexslide - 1].classList.add("slider")
        setTimeout(showSlideshow, 20000);
}
