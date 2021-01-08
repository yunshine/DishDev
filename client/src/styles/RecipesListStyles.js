import sizes from './MediaSizes';

export default {
    RecipesListBanner: {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://res.cloudinary.com/deyqjsowe/image/upload/v1609385709/Instant%20Pot%20Recipes/InstantPotBanner_gz2qqs.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px',
    },
    RecipesListText: {
        textAlign: 'center',
        color: 'white',
        letterSpacing: '10px',
    },
    RecipesListBannerH1: {
        fontSize: '48px',
        textShadow: '0px 0px 12px black',
    },
    RecipesList: {
        width: '1440px',
        margin: 'auto',
        padding: '8px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: 'calc(100vh - 96px)',
        // marginTop: '16px',
        // height: 'calc(100% - 48px)',
        // paddingBottom: '80px',

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
    },

    RecipesListCard: {
        width: '440px',
        // height: '560px',
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
            width: '480px',
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
    IndexShowRecipeButton: {
        color: 'turquoise',
    },
    // MainDiv: {
    //     margin: 'auto',
    //     marginTop: '56px',
    //     marginBottom: '0px',
    //     width: '80%',
    //     textAlign: 'center',
    //     '& h3': {
    //         margin: 'auto',
    //         color: 'orange',
    //         fontSize: '56px',
    //     },
    //     '& i': {
    //         margin: 'auto',
    //         color: 'orange',
    //         fontSize: '120px',
    //     },
    // },
};
