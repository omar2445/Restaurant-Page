import placeimg from '../images/restaurant-location.png'; 
export default function cont(){
    const content = document.querySelector('#content')
    content.appendChild(creatparag('📞 123 456 789'));
    content.appendChild(creatparag('🏠 Hollywood Boulevard 42, Los Angeles, USA'));
    const img = document.createElement('img');
    img.src = placeimg;
    img.height = 300;
    content.appendChild(img);

}
 function creatparag(text){
    const parag = document.createElement('p');
    parag.textContent = text;
    return parag;
}