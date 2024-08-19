function changeImages(init, newi, select, gallery, button) {
  console.log(select);
  if (select) {
    for (let i = 0; i < gallery.length; i++) {
      gallery[i].src = newi[i];
    }
    select = false;
  } else {
    for (let i = 0; i < gallery.length; i++) {
      gallery[i].src = init[i];
    }
    select = true;
  }

  const arrow = button.querySelector('.gallery-swipe-rotate');
  arrow.classList.toggle("gallery-swipe-rotate_back");
  return select;
}

const galleryImagesGirl = document.querySelectorAll('.gallery-image-girl');
const swipeButtonGirl = document.querySelector('.gallery-swipe-girl');
let isBackGirl = true;
function changeImagesGirl() {
  const initialImages = [
    "images/dress/dress4.jpg",
    "images/dress/dress.jpg",
    "images/dress/dress6.jpg",
    "images/dress/dress2.jpg",

  ];

  const newImages = [
    "images/dress/dress3.jpg",
    "images/dress/dress5.jpg",
    "images/dress/dress7.jpg",
    "images/dress/dress8.jpg",
  ];
  const result = changeImages(initialImages, newImages, isBackGirl, galleryImagesGirl, swipeButtonGirl);
  isBackGirl = result;
}

const galleryImagesMan = document.querySelectorAll('.gallery-image-man');
const swipeButtonMan = document.querySelector('.gallery-swipe-man');
let isBackMan = true;

function changeImagesMan() {
  const initialImages = [
    "images/man/man.jpg",
    "images/man/man2.jpg",
    "images/man/man3.jpg",
    "images/man/man4.jpg"
  ];
  const newImages = [
    "images/man/man5.jpg",
    "images/man/man6.jpg",
    "images/man/man7.jpg",
    "images/man/man8.jpg"
  ];

  const result = changeImages(initialImages, newImages, isBackMan, galleryImagesMan, swipeButtonMan);
  isBackMan = result;
}