import data from './indexEventsJSON.js';

const dataEvents = document.querySelector('[data-events]');

for (const element of data) {
    let imagesAnchor = '';
    const images = element.images.forEach(image => {
        const imageA = `<a data-lightbox="${image.dataLightbox}" href="${image.href}"><img src="${image.src}" alt="miniatura"></a>`
        imagesAnchor += imageA;
    })
    
    const section = 
    `
    <section class="event">
            <h3>${element.h3}</h3>
        <p>
           ${element.p}
        </p>
        <div class="images">
            ${imagesAnchor}     
        </div>
    </section>
    `
    dataEvents.innerHTML += section;
}