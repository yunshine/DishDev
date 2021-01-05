import sizes from './MediaSizes';

export default {
    RecipesList: {
        width: '1440px',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid teal',
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
        height: '560px',
        margin: '16px 16px',
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
        border: '1px solid blue',
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
