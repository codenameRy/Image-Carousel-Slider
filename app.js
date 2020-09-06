const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
//Buttons
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//Button Event Listener
//Next Button
nextBtn.addEventListener('click', function (){
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

//Previous Button
previousBtn.addEventListener('click', function (){
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

//Reset Transition
carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    }
});