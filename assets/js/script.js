document.addEventListener('DOMContentLoaded', function () {
    // Your birthdate in the format YYYY-MM-DD
    var birthdate = '1997-03-26';
    var dateofJoining = '2021-02-15';

    // Calculate age
    var age = calculateAge(birthdate);

    var expirence = calculateAge(dateofJoining);

    // Update the age in the HTML
    document.getElementById('age').textContent = age.years;

    document.getElementById('experience').textContent = expirence.years + ' years ' + expirence.months + ' months ';


    //Getting current year to print in Copyrigh
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

function calculateAge(birthdate) {
    var birthdateObj = new Date(birthdate);
    var currentDate = new Date();

    var ageInMilliseconds = currentDate - birthdateObj;

    var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    return {
        years: years,
        months: months,
        days: days
    };
}


// document.addEventListener('DOMContentLoaded', function () {
    
// });

document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="close" onclick="closeLightbox()">&times;</span><div class="lightbox-content"><img id="lightbox-image"></div>';
    document.body.appendChild(lightbox);

    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            openLightbox(item.querySelector('img').src);
        });
    });
});

function openLightbox(imageSrc) {
    document.getElementById('lightbox-image').src = imageSrc;
    document.querySelector('.lightbox').style.display = 'block';
}

function closeLightbox() {
    document.querySelector('.lightbox').style.display = 'none';
}