// ✅ Correct
import home from './Home.js';
import cont from './Contact.js';
import Menu from './Menu.js';


export default function eva(){
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');
    btn1.addEventListener('click',()=>{
        clear();
        home();
    });
        btn2.addEventListener('click',()=>{
        clear();
        Menu();
    });
        btn3.addEventListener('click',()=>{
        clear();
        cont();
    });
}
function clear(){
    const content = document.querySelector('#content');
    content.innerHTML='';
}