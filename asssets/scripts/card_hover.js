function handleMouseEnter(){
    this.classList.add("s-card_hovered")
    document.body.id = `${this.id}_hovered`;
}

function handleMouseLeave(){
    this.classList.remove("s-card_hovered")
    document.body.id = ``;
}

function addEventListenerToCard(){
    const cardElements = document.getElementsByClassName("s-card");

    for (let index = 0; index < cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenerToCard, false);

function selectCarouselItem(selectedButtonElement){
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYdeg = -120 * ( Number(selectedItem) -1);
    const newTransform = transform.replace(rotateY[0], `rotateY( ${rotateYdeg}deg)`);
    
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-controller_button--active');
    activeButtonElement.classList.remove('s-controller_button--active');
    selectedButtonElement.classList.add('s-controller_button--active');
}