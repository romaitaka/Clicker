document.getElementById('changeableImage').addEventListener('click', function () {
    var image = document.getElementById('changeableImage');

    if (image.src.endsWith('img/img1.jpg')) {
        image.src = 'img/img2.jpg';
    } else {
        image.src = 'img/img1.jpg';
    }
});
