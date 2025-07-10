import pizza from '../images/pizza.jpg'; 

export default function Menu(){
    const content = document.querySelector('#content');
    content.classList.add('menu');
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
    content.appendChild(MenuElement('Salsiccia','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, BasilSalsiccia'));
}


function MenuElement(name,parag){
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.appendChild(image());
    div.appendChild(MenuAitems(name,parag));

    return div;
}

function MenuAitems(name, description) {
    const container = document.createElement('div');
    container.classList.add('menu-info');
    const h = document.createElement('h1');
    h.textContent = name;

    const p = document.createElement('p');
    p.textContent = description;

    container.appendChild(h);
    container.appendChild(p);

    return container;
}


function image(){
    const div =document.createElement('div');
    const img = document.createElement('img');
    img.src = pizza;  
    img.height = 100;
    div.appendChild(img);

    return div;
}