var images = [];

function preloadImages(){

    for (var i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("https://assets.stickpng.com/images/58430032a6515b1e0ad75b3f.png", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/800px-2022_FIFA_World_Cup.svg.png");