import homePageContent from './HomePage';
import menuPageContent from './MenuPage';
import contactPageContent from './ContactPage';

var initialize = (() => {
    var body = document.querySelector('body');

    var header = document.createElement('div');
    header.classList.add('header');
    body.prepend(header);

    var homeButton = document.createElement('div');
    homeButton.textContent = 'Home';
    header.appendChild(homeButton);
    var separatorOne = document.createElement('span');
    separatorOne.textContent = '|';
    header.appendChild(separatorOne);
    var menuButton = document.createElement('div');
    menuButton.textContent = 'Menu';
    header.appendChild(menuButton);
    var separator = document.createElement('span');
    separator.textContent = '|';
    header.appendChild(separator);
    var contactButton = document.createElement('div');
    contactButton.textContent = 'Contact';
    header.appendChild(contactButton);

    var defocusAllButtons = () => {
        changeButtonStyle(homeButton,'white');
        changeButtonStyle(menuButton,'white');
        changeButtonStyle(contactButton,'white');
    }
    var changeButtonStyle = (element,colour) => {
        element.style.color = colour;
    }
    homeButton.onclick = () => {
        defocusAllButtons();
        changeButtonStyle(homeButton,'black');
        homePageContent();
    };
    menuButton.onclick = () => {
        defocusAllButtons();
        changeButtonStyle(menuButton,'black');
        menuPageContent();
    };
    contactButton.onclick = () => {
        defocusAllButtons();
        changeButtonStyle(contactButton,'black');
        contactPageContent();
    };

    changeButtonStyle(homeButton);
    homePageContent();
})();