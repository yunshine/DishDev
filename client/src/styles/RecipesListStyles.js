import sizes from './MediaSizes';

export default {
    RecipesList: {
        width: '960px',
        margin: 'auto',
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
    image: {
        width: '320px',
    },
    IndexDeleteRecipeButton: {
        color: 'red',
    },
    IndexUpdateRecipeButton: {
        color: 'green',
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
