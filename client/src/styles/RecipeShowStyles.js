import sizes from './MediaSizes';

export default {
    RecipeShow: {
        border: '5px solid red',
        width: '1440px',
        margin: 'auto',
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'relative',
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
    RecipeShowTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContents: 'center',
    },
    RecipeShowCardImage: {
        width: '540px',
        height: '400px',
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
    RecipeShowTopRight: {
        textAlign: 'center',
        padding: '16px',
    },
    RecipeShowBottom: {
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContents: 'center',
        '& h3': {
            textAlign: 'center',

        },
    },
    RecipeShowBottomLeft: {
        border: '2px solid yellow',
        width: '40%',
    },
    RecipeShowBottomRight: {
        border: '2px solid blue',
        width: '60%',
    },
}