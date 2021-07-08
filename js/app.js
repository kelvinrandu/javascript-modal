const modalBtn= document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',function(){
    modalOverlay.classList.add('open-modal');
    console.log(modalOverlay);
});

closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');

})