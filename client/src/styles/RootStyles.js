import sizes from './MediaSizes';

export default {
    Root: {
        // backgroundColor: 'rgba(255,64,80, 1)',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://res.cloudinary.com/deyqjsowe/image/upload/v1609385709/Instant%20Pot%20Recipes/InstantPotBanner_gz2qqs.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '250px 0',
    },
    RootText: {
        width: '1440px',
        [sizes.down('xl')]: {
            width: '1100px',
        },
        [sizes.down('lg')]: {
            width: '960px',
        },
        [sizes.down('md')]: {
            width: '720px',
        },
        [sizes.down('sm')]: {
            width: '540px',
        },
        [sizes.down('xs')]: {
            width: '100%',
        },
    }
}

    // style="backgroundImage: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://res.cloudinary.com/deyqjsowe/image/upload/v1609385709/Instant%20Pot%20Recipes/InstantPotBanner_gz2qqs.jpg);"

//     .banner {
//     background - size: cover;
//     background - position: center;
//     padding: 150px 0;
// }

//   .banner h1 {
//     margin: 0;
//     color: white;
//     text - shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
//     font - size: 32px;
//     font - weight: bold;
// }

//   .banner p {
//     font - size: 20px;
//     color: white;
//     opacity: .7;
//     text - shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
// }
