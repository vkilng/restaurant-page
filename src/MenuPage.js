let menuPageContent = (() => {
    var content = document.querySelector('#content');
    content.innerHTML = null;

    var menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);
    var sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    menu.appendChild(sideBar);
    var sideBarList = document.createElement('ul');
    sideBar.appendChild(sideBarList);
    sideBarList.insertAdjacentHTML('beforeend','<li>Burritos</li>');
    sideBarList.insertAdjacentHTML('beforeend','<li>Tacos</li>');
    sideBarList.insertAdjacentHTML('beforeend','<li>Sides</li>');

    var menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menu.appendChild(menuContent);
    var burritos = [
        {imgUrl: './assets/fajita-burrito.jpg', itemName: 'Classic Fajita Burrito', price: '$ 3'},
        {imgUrl: './assets/potato-burrito.jpg', itemName: 'Potato Roast Burrito', price: '$ 3'},
        {imgUrl: './assets/mexican-burrito.jpg', itemName: 'Mexican Tofu Burrito', price: '$ 4'},
    ]
    var burritoList = document.createElement('ul');
    menuContent.appendChild(burritoList);
    burritos.forEach(item => {
        let liElement = document.createElement('li');
        burritoList.appendChild(liElement);
        let picDiv = document.createElement('div');
        picDiv.classList.add('item-pic');
        picDiv.style.backgroundImage = `url(${item.imgUrl})`;
        liElement.appendChild(picDiv);
        liElement.insertAdjacentHTML('beforeend',`<div>${item.itemName}</div>`);
        liElement.insertAdjacentHTML('beforeend',`<div class='item-price'>${item.price}</div>`);
    });
})

export default menuPageContent;