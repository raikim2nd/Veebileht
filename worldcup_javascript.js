var images = [];

function preloadImages(){

    for (var i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("https://cdni0.trtworld.com/w960/h540/q75/34736_worldcup_1528293488717.jpg", "https://img.fifa.com/image/upload/t_l1/em4mlli1thcvngvouceb.jpg", "https://assets.stickpng.com/images/58430032a6515b1e0ad75b3f.png", "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/07/15/18/2018-07-15T173311Z-387054244-UP1EE7F1CRABL-RTRMADP-3-SOCCER-FINAL.JPG?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5", "https://images.indianexpress.com/2018/07/luka-modric-fb.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/800px-2022_FIFA_World_Cup.svg.png");
