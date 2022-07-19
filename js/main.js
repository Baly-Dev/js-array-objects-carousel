// object
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const carousel = document.querySelector('.carousel_items')
const gallery = document.querySelector('.carousel_gallery')

const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('btnPrev')

let slider = 0
const slides = []
const galleryItems = []

// create all carousel items
images.forEach((e) => {

    // create carousel item
    let carouselItem = document.createElement('div')
    carouselItem.classList.add('col', 'carousel_item', 'position-relative', 'd-none', 'card', 'border-0')
    carouselItem.innerHTML = `
                            <img class="card-img" src="${e.url}">
                            <div class="card-img-overlay">
                                <h2 class="text-dark fw-bold text-white fs-1 position-absolute">${e.title}</h2>
                                <p class="text-dark position-absolute fs-5 text-white">${e.description}</p>
                            </div>
                            `
    carousel.append(carouselItem)
    slides.push(carouselItem)

    // create gallery item
    let galleryItem = document.createElement('div')
    galleryItem.classList.add('col', 'border', 'gallery_item', 'card')
    galleryItem.innerHTML = `
                            <img class="card-img" src="${e.url}">
                            <div class="card-img-overlay">
                            </div>
                            `
    gallery.append(galleryItem)
    galleryItems.push(galleryItem)
})

// show the first carousel item
slides[slider].classList.remove('d-none')
btnPrev.classList.add('invisible')

// setp forward
btnNext.addEventListener('click', () => {

    slides[slider].classList.add('d-none')
    slider++
    slides[slider].classList.remove('d-none')
    console.log(slider)
    console.log(slides.length)

    // hide btnNext if the slider lenght is equal to slides lenght
    if(slider >= slides.length -1 ){
        btnNext.classList.add('invisible')
    }

    // show btnPrev
    btnPrev.classList.remove('invisible')
})

// setp backward
btnPrev.addEventListener('click', () => {

    slides[slider].classList.add('d-none')
    slider--
    slides[slider].classList.remove('d-none')
    console.log(slider)
    console.log(slides.length)

     // hide btnPrev if the slider <= 0
    if(slider <= 0){
        btnPrev.classList.add('invisible')
    }
})