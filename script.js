let btnMore = document.querySelector('input.button_more');
btnMore.addEventListener('click', function(e){
    img9 = document.querySelector('.medias_section img:nth-child(9)');
    img10 = document.querySelector('.medias_section img:nth-child(10)');
    img11 = document.querySelector('.medias_section img:nth-child(11)');
    img12 = document.querySelector('.medias_section img:nth-child(12)');
    img9.classList.toggle('none');
    img10.classList.toggle('none');
    img11.classList.toggle('none');
    img12.classList.toggle('none');
    // console.log(e);
    console.log("texte");
    console.log(e);
})