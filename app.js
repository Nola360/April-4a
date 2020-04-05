const accordion_header = document.querySelector('.accordion_box').children;


const plus = document.querySelector('.fas.fa-plus');
const minus = document.querySelector('.fas.fa-minus');


for (let i = 0; i < accordion_header.length; i++) {
  accordion_header[i].addEventListener('click', function () {
    console.log(i);

    switch (i) {
      case 0:
        console.log('question 1');
        accordion_header[1].classList.add('active')
        accordion_header[3].classList.remove('active')
        accordion_header[5].classList.remove('active')
        plus.classList.add('active');
        minus.classList.add('active');
        break;
      case 2:
        console.log('qeustion 2');
        accordion_header[1].classList.remove('active')
        accordion_header[3].classList.add('active')
        accordion_header[5].classList.remove('active')
        plus.classList.add('active');
        minus.classList.add('active');
        break;
      case 4:
        console.log('question 3');
        accordion_header[1].classList.remove('active')
        accordion_header[3].classList.remove('active')
        accordion_header[5].classList.add('active')
        plus.classList.add('active');
        minus.classList.add('active');
    }
  })
}