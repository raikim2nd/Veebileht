var images = [];

function preloadImages(){

    for (var i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("https://cdni0.trtworld.com/w960/h540/q75/1976-trtworld-141171-173026.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/UEFA_Euro_2020_Logo.svg/1200px-UEFA_Euro_2020_Logo.svg.png");