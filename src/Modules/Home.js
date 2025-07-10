import foodImage from '../images/food.webp'; 
export default function home() {
    const content = document.querySelector('#content');
    //creting paragraph
    content.appendChild(creatparag('this is a restaurant'));
    //creating image and showing it
    const img = document.createElement('img');
    img.src = foodImage;  
    img.height = 300;
    content.appendChild(img);
    //creting paragraph
    content.appendChild(creatparag('order online from her'));
}
 function creatparag(text){
    const parag = document.createElement('p');
    parag.textContent = text;
    return parag;
}