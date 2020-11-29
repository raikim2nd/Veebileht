var images = [];

function preloadImages(){

    for (var i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/800px-2022_FIFA_World_Cup.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/9/96/UEFA_Euro_2020_Logo.svg/330px-UEFA_Euro_2020_Logo.svg.png","https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/179px-UEFA_Champions_League_logo_2.svg.png");