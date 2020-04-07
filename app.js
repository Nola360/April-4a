const accordion_header = document.querySelectorAll('.accordion_header');


console.log(accordion_header.nextElementSibling);
// console.log(accordion_content);


accordion_header.forEach(header => {
  header.addEventListener('click', () => {

    header.classList.toggle('active');
    const accordion_content = header.nextElementSibling;
    if (header.classList.contains('active')) {
      accordion_content.classList.toggle('active');
    }
    if (accordion_header.classList.contains('active')) {
      header.classList.toggle('active');
    }
  })
})



// const accordion_header = document.querySelectorAll('.accordion_item_header').forEach(header => {
//   header.addEventListener('click', event => {
//     header.classList.toggle('active');
//     const accordion_item_body = header.nextElementSibling;
//     if (header.classList.contains('active')) {
//       accordion_item_body.style.maxHeight = accordion_item_body.scrollHeight + 'px';
//     } else {
//       accordion_item_body.style.maxHeight = 0;
//     }
//   })
// })




// accordion_header.forEach(accordion_content => {
//   accordion_content.addEventListener('click', () => {
//     accordion_accordion_content.forEach(accordion_content => {
//       accordion_content.classList.remove('active');
//     })
//     accordion_content.classList.add('active');
//   })

// })

const plus = document.querySelector('.fas.fa-plus');
const minus = document.querySelector('.fas.fa-minus');


// for (let i = 0; i < accordion_header.length; i++) {
//   accordion_header[i].addEventListener('click', function () {
//     console.log(i);

//     switch (i) {
//       case 0:
//         console.log('question 1');
//         accordion_header[1].classList.add('active')
//         accordion_header[3].classList.remove('active')
//         accordion_header[5].classList.remove('active')
//         plus.classList.add('active');
//         minus.classList.add('active');
//         break;
//       case 2:
//         console.log('qeustion 2');
//         accordion_header[1].classList.remove('active')
//         accordion_header[3].classList.add('active')
//         accordion_header[5].classList.remove('active')
//         plus.classList.add('active');
//         minus.classList.add('active');
//         break;
//       case 4:
//         console.log('question 3');
//         accordion_header[1].classList.remove('active')
//         accordion_header[3].classList.remove('active')
//         accordion_header[5].classList.add('active')
//         plus.classList.add('active');
//         minus.classList.add('active');
//     }
//   })
// }