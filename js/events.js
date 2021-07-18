import dataJSON from './eventsJSON.js';

const dataArchive = document.querySelector('[data-archive]');


for (const data of dataJSON) {
    let dataImages = '';
    const images = data.images.forEach(image => {
        dataImages += `<a data-lightbox="${image.dataLightbox}" href="${image.href}"><img src="${image.src}" alt="miniatura"></a>`
    })

    const section = 
    `
    <section class="event">
            <h3>${data.h3}</h3>
        <p>
            ${data.p}
        </p>
        <div class="images">
            ${dataImages}     
        </div>
    </section>
    `

    dataArchive.innerHTML += section;
}