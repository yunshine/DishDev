import sizes from './MediaSizes';

export default {
    RecipeShow: {
        // border: '5px solid red',
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
        fontFamily: 'Helvetica, Arial, sans-serif',
        '& hr': {
            borderTop: '1px solid rgba(255,64,80,.39)',
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
        },
    },
    RecipeShowTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
    },
    RecipeShowTopLeft: {
        // border: '2px solid yellow',
        textAlign: 'center',
        margin: '16px',
        // padding: '0 16px',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        [sizes.down('md')]: {
            margin: '12px',
        },
        '& h1': {
            fontSize: '64px',
            letterSpacing: '6px',
            fontWeight: '100',
            [sizes.down('lg')]: {
                fontSize: '48px',
            },
            [sizes.down('md')]: {
                fontSize: '44px',
            },
        },
        '& p': {
            fontSize: '16',
            fontWeight: '200',
            color: 'rgba(0,0,0,.55)',
            // color: 'rgba(255,64,80,.85)',
            // color: '#ff4050',
            // color: '#2483b3',
        },
    },
    RecipeShowTopRight: {
        margin: '16px',
        // border: '2px solid blue',
        // padding: '24px 24px 24px 0px',
        [sizes.down('md')]: {
            margin: '12px',
        },
    },
    RecipeShowCardImage: {
        width: '540px',
        height: '400px',
        objectFit: 'cover',
        padding: '0px',
        boxShadow: '0px 0px 28px 8px rgba(0, 0, 0, .25)',
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
    RecipeShowBottom: {
        marginTop: '24px',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        '& h2': {
            textAlign: 'center',
            fontSize: '32px',
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: '300',
        },
    },
    RecipeShowBottomLeft: {
        // border: '2px solid yellow',
        // paddingLeft: '24px',
        // paddingRight: '24px',
        width: '588px',
        textAlign: 'center',
        '& ul': {
            padding: '0',
        },
        '& li': {
            listStyleType: 'none',
            fontSize: '18px',
            fontWeight: '200',
        },
    },
    RecipeShowBottomRight: {
        // border: '2px solid blue',
        width: '852px',
        padding: '0 16px',
    },
}