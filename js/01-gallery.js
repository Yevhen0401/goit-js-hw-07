import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map (({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`)
.join('');


gallery.innerHTML = galleryMarkup;
gallery.addEventListener ('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if(evt.target.classList.contains("gallery__image")) {
      const originalImage = evt.target.dataset.source;
      instance(originalImage);
    }
}

function instance(imageURL) {
 const instance = basicLightbox.create(`
 <img src="${imageURL}" width="800" height="600">
    `);
     instance.show()

     document.addEventListener('keydown', (evt) => {
        if(evt.code === "Escape") {
            instance.close();
        }
 });
        
}



