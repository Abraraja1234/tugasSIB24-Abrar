// script.js
const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        let counter = 0;
        const size = slide[0].clientWidth;
        
        setInterval(() => {
            slides.style.transition = "transform 2s ease-in-out";
            counter++;
            slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }, 2000);
        
        slides.addEventListener('transitionend', () => {
            if (counter >= slide.length - 1) {
                slides.style.transition = "none";
                counter = -1;
                slides.style.transform = 'translateX(0)';
            }
        });
       
        //struktur code
         //* menampilkan alert
         function tampilkanalert(){
            return alert('hello kawan anjay')
         }

         var fullname = "abrar"
         document.write(fullname)
         document.write('br')

         var fullname = "gatau"
         document.write(fullname)
         document.write('br')

         var fullname = "lebih gatau lagi anjayy"
         document.write(fullname)
         document.write('br')

