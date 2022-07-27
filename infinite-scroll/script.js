const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];

const count = 10;
const apiKey = '6kcVUDDNn-Xn06YN795rn72QjrK-1RD6LkoZ5036GGA';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_decription);
    img.setAttribute('title', photo.alt_decription);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    alert(error);
  }
}

getPhotos();
