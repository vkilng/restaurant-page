let homePageContent = (() => {
    var content = document.querySelector('#content');
    content.innerHTML = null;

    var headerInfo = document.createElement('div');
    headerInfo.classList.add('header-window');
    headerInfo.textContent = 'This is Bell Pepper Garden';
    content.appendChild(headerInfo);

    var quoteElement = document.createElement('div');
    quoteElement.classList.add('quote');
    content.appendChild(quoteElement);
    var textWrapperElement = document.createElement('div');
    textWrapperElement.classList.add('text-wrapper');
    textWrapperElement.textContent = `"Great place for the locals. The food is great and cheap! 
        We had a party of 6 and everyone loved everything we ordered, especially the 
        bell pepper special, which I would recommend if you're in town"`
    quoteElement.appendChild(textWrapperElement);
    var quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = '- Peter Hanoi';
    textWrapperElement.appendChild(quoteAuthor);

    var footerElement = document.createElement('footer');
    content.append(footerElement);
    var footerLinkOne = document.createElement('a');
    footerLinkOne.setAttribute('href',"https://www.flaticon.com/free-icons/bell-pepper");
    footerLinkOne.setAttribute('title',"bell-pepper icons");
    footerLinkOne.textContent = 'Bell-pepper icons created by AngDiz - Flaticon';
    footerElement.appendChild(footerLinkOne);
})

export default homePageContent;