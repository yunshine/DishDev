import sizes from './MediaSizes';

export default {
    RootPage: {
        // position: 'relative',
        // paddingBottom: '48px',
    },
    RootJumbotron: {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://res.cloudinary.com/deyqjsowe/image/upload/v1609385709/Instant%20Pot%20Recipes/InstantPotBanner_gz2qqs.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 'calc(32vh) 0',
        minHeight: 'calc(100vh - 96px)',
    },
    RootText: {
        width: '1440px',
        margin: 'auto',
        '& h1': {
            margin: '0',
            color: 'white',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
            fontSize: '32px',
            fontWeight: 'bold',
        },
        '& p': {
            fontSize: '20px',
            color: 'white',
            opacity: '.85',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
            marginBottom: '40px',
        },
        '& a': {
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 64, 80, 1)',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
            transition: '.2s all ease-in-out',
        },
        '& a:hover': {
            backgroundColor: '#b31b27',
            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, .2)',
        },

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
            padding: '0 16px',
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
