import sizes from './MediaSizes';

const rootStyles = {
    RootPage: {
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
            marginBottom: '36px',
        },
        '& a': {
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 64, 80, 1)',
            borderRadius: '4px',
            color: 'white',
            padding: '12px 32px',
            transition: '.1s all ease-in-out',
        },
        '& a:hover': {
            backgroundColor: '#b31b27',
            color: '#fffa59',
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
};

export default rootStyles;