let myul = document.getElementById('newul');
let li = document.querySelectorAll('.foreachme');
let mainimg = document.querySelector('.mainimg');
let sidediv1 =document.querySelectorAll('.relationProblem');
myul.addEventListener('click',myfunc);

function myfunc(e){

            
        li.forEach(li => {li.classList.remove('active')});
        e.target.classList.add('active');

        if(e.target.innHTML === li.innerHTML){
            
            sidediv1.classList.add('d-none')
            sidediv2.classList.remove('d-none');
            sidediv2.classList.add('d-block');

           }
            
            
            
        
      
}






