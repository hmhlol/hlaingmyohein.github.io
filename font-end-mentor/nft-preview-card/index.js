var smth = document.querySelector('.image-box');
 function hold_over(){
    smth.classList.remove('off');
    smth.classList.add('active'); 
 }
 function not_hold_over(){
     smth.classList.remove('active');
     smth.classList.add('off');
 }
