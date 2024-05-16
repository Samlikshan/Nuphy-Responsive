var images = [
    "https://nuphy.com/cdn/shop/files/00_Halo75_V2_Hero_v3_Move_1728x.jpg?v=1713436818",
    "https://nuphy.com/cdn/shop/files/Gem80_Hero_3000x_159a22ad-d5e8-4cbc-8b0b-e479ef5f7d94_1728x.jpg?v=1704683139",
    "https://nuphy.com/cdn/shop/files/air75_v2_hero_3024x.jpg?v=1692807059",
    "https://nuphy.com/cdn/shop/files/field75_hero_1728x.jpg?v=1681526533"
];
var currentIndex = 0;

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
    updateImage();
}

function updateImage() {
    var img = document.getElementById("slider-image");
    img.classList.remove("active");
    setTimeout(function() {
        img.src = images[currentIndex];
        img.classList.add("active");
    }, 400); 
}

function updateContent() {
    var heroTxtWrap = document.querySelector(".hero-txt-wrap");
    heroTxtWrap.classList.remove("active");
    setTimeout(function() {
        switch (currentIndex) {
            case 0:
                heroTxtWrap.querySelector(".hero-txt-h1 h1").innerText = "Halo75 V2";
                heroTxtWrap.querySelector(".hero-txt-h2 h2").innerText = "New heights, new lights, and new highlights";
                break;
            case 1:
                heroTxtWrap.querySelector(".hero-txt-h1 h1").innerText = "Gem80";
                heroTxtWrap.querySelector(".hero-txt-h2 h2").innerText = "Discover the gem of mechanical keyboards";
                break;
            case 2:
                heroTxtWrap.querySelector(".hero-txt-h1 h1").innerText = "Air75 V2";
                heroTxtWrap.querySelector(".hero-txt-h2 h2").innerText = "The fastest and slimmest QMK/VIA keyboard on the planet";
                break;
             case 3:
                heroTxtWrap.querySelector(".hero-txt-h1 h1").innerText = "Field75";
                heroTxtWrap.querySelector(".hero-txt-h2 h2").innerText = "Every day is a field day";
                break;    
            default:
                break;
        }
        heroTxtWrap.classList.add("active");
    }, 400);
}