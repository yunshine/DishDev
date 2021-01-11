import sizes from './MediaSizes';

export default {
    RecipesListBanner: {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://res.cloudinary.com/deyqjsowe/image/upload/v1609385709/Instant%20Pot%20Recipes/InstantPotBanner_gz2qqs.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '240px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        [sizes.down('md')]: {
            height: '180px',
        },
        [sizes.down('sm')]: {
            height: '160px',
        },
        [sizes.down('xs')]: {
            height: '160px',
        },
    },
    RecipesListText: {
        textAlign: 'center',
        color: 'white',
        letterSpacing: '12px',
        padding: '0',
        [sizes.down('md')]: {
            letterSpacing: '8px',
            width: '100%',
        },
        [sizes.down('sm')]: {
            letterSpacing: '6px',
        },
        [sizes.down('xs')]: {
            letterSpacing: '4px',
            padding: '0',
        },
    },
    RecipesListBannerH1: {
        fontSize: '48px',
        textShadow: '0px 0px 12px black',
        padding: '0',
        [sizes.down('md')]: {
            padding: '0',
            fontSize: '40px',
        },
        [sizes.down('sm')]: {
            fontSize: '40px',
            margin: '0',
            padding: '0',
            '& span': {
                display: 'none',
            },
        },
        [sizes.down('xs')]: {
            fontSize: '36px',
        },
    },
    RecipesList: {
        width: '1440px',
        margin: 'auto',
        padding: '8px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'start',
        minHeight: 'calc(100vh - 336px)',
        position: 'relative',
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
            width: '100%',
            minHeight: 'calc(100vh - 296px)',
        },
        [sizes.down('xs')]: {
            width: '100%',
        },
    },

    RecipesListCard: {
        position: 'relative',
        width: '440px',
        height: '500px',
        margin: '8px 16px 8px 16px',
        boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, .16)',
        [sizes.down('lg')]: {
            width: '400px',
        },
        [sizes.down('md')]: {
            width: '320px',
        },
        [sizes.down('sm')]: {
            width: '480px',
        },
        [sizes.down('xs')]: {
            width: '100%',
        },
    },

    RecipesListCardImage: {
        width: '440px',
        height: '320px',
        objectFit: 'cover',
        padding: '0px',
        [sizes.down('lg')]: {
            width: '400px',
        },
        [sizes.down('lg')]: {
            width: '400px',
        },
        [sizes.down('md')]: {
            width: '320px',
        },
        [sizes.down('sm')]: {
            width: '100%',
        },
        [sizes.down('xs')]: {
            width: '100%',
        },
    },
    RecipesListCardText: {
        padding: '8px 16px',
    },
    RecipesListCardName: {
        fontSize: '32px',
        letterSpacing: '3px',
    },
    RecipesListCardDescription: {
        fontSize: '16px',
        fontWeight: '300;'
    },
    IndexDeleteRecipeButton: {
        color: 'red',
    },
    IndexUpdateRecipeButton: {
        color: 'green',
    },
    RecipeListCardButtonDiv: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    IndexShowRecipeButton: {
        position: 'absolute',
        bottom: '0',
        marginBottom: '8px',
        backgroundColor: '#ff4050',
        color: 'white',
        transition: '.1s all ease-in-out',
        margin: '0',
        marginBottom: '16px',
        borderRadius: '4px',
        padding: '6px 24px',
        '&:hover': {
            backgroundColor: '#b31b27',
            color: '#fffa59',
            textDecoration: 'none',
            boxShadow: '0px 0px 8px 1px rgba(0,0,0, .2)',
        },
    },
};
