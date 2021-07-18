import anchors from './indexImagesJSON.js';

const dataImages = document.querySelector('[data-images]');

for (const data of anchors) {
    dataImages.innerHTML += `<a data-lightbox="obrazek-1" href="${data.href}"><img src="${data.src}" alt="miniatura"></a>`
}
