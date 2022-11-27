var contactPageContent = (() => {
    var content = document.querySelector('#content');
    content.innerHTML = null;

    var contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    content.appendChild(contactContainer);

    var form = document.createElement('form');
    contactContainer.appendChild(form);

    form.insertAdjacentHTML('beforeend','<div>&ensp;Name<input type="text" required></div>');
    form.insertAdjacentHTML('beforeend','<div>&ensp;Email<input type="email" required></div>');
    form.insertAdjacentHTML('beforeend','<div>&ensp;Name<input type="text" required></div>');
    form.insertAdjacentHTML('beforeend','<div><input type="button" value="submit"></div>');

    contactContainer.insertAdjacentHTML('beforeend','<div id="map"></div>');

    var iframeMap = document.createElement('iframe');
    iframeMap.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d490.02865212417976!2d-73.99347104078353!3d40.742007923384975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1669559052936!5m2!1sen!2sin';
    iframeMap.setAttribute('loading','lazy');
    iframeMap.setAttribute('referrerpolicy','no-referrer-when-downgrade');
    contactContainer.appendChild(iframeMap);
})

export default contactPageContent;