// script.js
// const slides = document.querySelector('.slides');
//         const slide = document.querySelectorAll('.slide');
//         let counter = 0;
//         const size = slide[0].clientWidth;
        
//         setInterval(() => {
//             slides.style.transition = "transform 2s ease-in-out";
//             counter++;
//             slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         }, 2000);
        
//         slides.addEventListener('transitionend', () => {
//             if (counter >= slide.length - 1) {
//                 slides.style.transition = "none";
//                 counter = -1;
//                 slides.style.transform = 'translateX(0)';
//             }
//         });
       
//       // Ambil elemen dengan id "demo" dari dokumen HTML
//   var element = document.getElementById("demo");

//   // Ubah teks elemen tersebut
//   element.innerHTML = "Halo, dunia! Ini adalah JavaScript.";

//   // Munculkan pesan di konsol browser
//   console.log("Halo, ini adalah pesan di konsol!");

//   // Fungsi untuk memberi sapaan
//   function sayHello() {
//     // Ambil nilai dari input teks
//     var name = document.getElementById("nameInput").value;

//     // Periksa apakah nama telah dimasukkan
//     if (name) {
//       // Jika ada nama, beri sapaan
//       alert("Halo, " + name + "! Selamat datang di situs kami!");
//     } else {
//       // Jika tidak ada nama, beri peringatan
//       alert("Maaf, silakan masukkan nama Anda terlebih dahulu.");
//     }
//   }
//   // Data gambar untuk carousel
//   const images = [
//     "image/1.jpg.png",
//     "image/foto.jpg.jpg",
//     "image/logo.png"
//     "image/3.jpg.png" // Tambahkan path gambar baru di sini
// ];
// // Mendapatkan elemen carousel
// const carousel = document.querySelector('.carousel');
// // Membuat dan menambahkan elemen slide ke dalam carousel
// images.forEach(image => {
//   const slide = document.createElement('div');
//   slide.classList.add('slide');
//   const img = document.createElement('img');
//   img.src = image;
//   img.alt = "Foto Anda";
//   img.classList.add('landing-image');
//   img.width = "100%";
//   slide.appendChild(img);
//   carousel.appendChild(slide);
// });
//  // Mengatur animasi carousel
//  const slides = document.querySelectorAll('.slide');
//  let counter = 0;
//  const size = slides[0].clientWidth;

//  setInterval(() => {
//      carousel.style.transition = "transform 2s ease-in-out";
//      counter++;
//      carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
//  }, 2000);

//  carousel.addEventListener('transitionend', () => {
//      if (counter >= slides.length - 1) {
//          carousel.style.transition = "none";
//          counter = -1;
//          carousel.style.transform = 'translateX(0)';
//      }
//  });
//courousel\\


let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
