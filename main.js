window.onload = function() {
    let image = document.querySelector('.image');
    let link = document.createElement('a');
    link.href = 'https://github.com/';
    link.appendChild(image.cloneNode(true));
    image.parentNode.replaceChild(link, image);
}
