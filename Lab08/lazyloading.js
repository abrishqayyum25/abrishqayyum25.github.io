function lazyload() {
    const images = document.querySelectorAll('img.lazy');
    for (let img of images) {
        if (img.offsetTop < window.innerHeight + window.pageYOffset) {
            img.src = img.dataset.src; 
            img.alt= img.dataset.alt; 
            img.classList.remove('lazy'); 
        }
    }
}
window.addEventListener("scroll", lazyload);
window.addEventListener("load", lazyload);
window.addEventListener("resize", lazyload);
lazyload(); 
