var images = [];

function preloadImages(){

    for (var i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("https://editorial.uefa.com/resources/025f-0fe0cd7f0734-a5aa8cb0c77f-1000/fbl-eur-c1-draw.jpeg", "https://i2-prod.mirror.co.uk/incoming/article4272108.ece/ALTERNATES/s810/Real-Madrid-CF-v-FC-Basel-1893-UEFA-Champions-League.jpg", "https://images.daznservices.com/di/library/GOAL/94/e2/bayern-munich-celebration-vs-psg-champions-league-final-2019-20_1q9uljzg9en131fir7yxmynmkr.jpg?t=567999716&quality=100");