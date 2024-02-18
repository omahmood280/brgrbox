const scrollers = document.querySelectorAll(".slider1")

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    AddAnimation();
}

function AddAnimation(){
scrollers.forEach((scroller)=>{
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector('.food-images');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute('aria-hidden', true);
            // Create a wrapper for each set of duplicated items
            const wrapper = document.createElement('div');
            wrapper.classList.add('duplicated-wrapper');
            wrapper.appendChild(duplicatedItem);

            // Append the wrapper to the scrollerInner
            scrollerInner.appendChild(wrapper);    })

})
}



 
let slider = document.querySelector('.slider1');

slider.addEventListener('mouseleave',()=>{
    const foodImages = document.querySelector('.food-images');
    foodImages.style.animationPlayState = 'running';
})

slider.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    const foodImages = document.querySelector('.food-images');
    foodImages.style.animationPlayState = 'paused';
    slider.style.cursor = 'grab';
})

slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
})

const images = document.querySelectorAll('.food-images img');

images.forEach((image) => {
    let originalTransform = window.getComputedStyle(image).getPropertyValue('transform');
    image.addEventListener('mouseenter', (event) => {
        event.preventDefault();
        image.style.transform = 'scale(1.4)'
        image.style.position = 'relative';
        image.style.zIndex = '1';

    });
    image.addEventListener('mouseleave', (event) => {
        event.preventDefault();
        image.style.transform = originalTransform;
        image.style.position = 'static';
        image.style.zIndex = 'auto';

    });

    image.addEventListener('touchend', (event) => {
        event.preventDefault();
        image.style.transform = originalTransform;
        image.style.position = 'static';
        image.style.zIndex = 'auto';

        });

    image.addEventListener('touchstart', (event) => {
                image.style.position = 'relative';
        image.style.zIndex = '1';
        image.style.transform = 'scale(1.5)'
    });
});

slider.addEventListener("touchend", (event) => {
    const foodImages = document.querySelector('.food-images');
    foodImages.style.animationPlayState = 'running';

});

slider.addEventListener("touchstart", (event) => {
    const foodImages = document.querySelector('.food-images');
    foodImages.style.animationPlayState = 'paused';
});