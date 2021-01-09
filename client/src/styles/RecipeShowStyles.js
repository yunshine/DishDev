import { withTheme } from 'styled-components';
import sizes from './MediaSizes';

export default {
    RecipeShow: {
        width: '1440px',
        margin: 'auto',
        minHeight: 'calc(100vh - 96px)',

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
            width: '100%',
            padding: '24px',
        },
        [sizes.down('xs')]: {
            width: '100%',
            padding: '16px',
        },
    },
    RecipeShowTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        [sizes.down('sm')]: {
            display: 'inline',
        },
    },
    RecipeShowTopLeft: {
        textAlign: 'center',
        width: '588px',
        margin: '16px',
        [sizes.down('md')]: {
            margin: 'auto',
            padding: '0 16px',
            width: '100%',
        },
        [sizes.down('sm')]: {
            margin: '0px',
            marginBottom: '20px',
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
            [sizes.down('sm')]: {
                fontSize: '48px',
            },
            [sizes.down('iPhone')]: {
                fontSize: '40px',
            },
        },
        '& p': {
            fontSize: '16',
            fontWeight: '200',
            color: 'rgba(0,0,0,.55)',
            // color: 'rgba(255,64,80,.85)',
            // color: '#ff4050',
            // color: '#2483b3',
            [sizes.down('sm')]: {
                color: 'rgba(0,0,0,.65)',
            },
        },
    },
    ShowPageUpdateButton: {
        backgroundColor: '#26b5ff',
        color: 'white',
        transition: '.1s all ease-in-out',
        margin: '8px 8px',
        borderRadius: '4px',
        padding: '8px 8px',
        '&:hover': {
            backgroundColor: '#2482b3',
            color: '#fffa59',
            textDecoration: 'none',
            boxShadow: '0px 0px 8px 1px rgba(0,0,0, .2)',
        },
        [sizes.down('sm')]: {
            marginBottom: '16px',
        },
    },
    ShowPageDeleteButton: {
        backgroundColor: '#ff4050',
        color: 'white',
        transition: '.1s all ease-in-out',
        margin: '8px 8px',
        borderRadius: '4px',
        padding: '8px 8px',
        '&:hover': {
            backgroundColor: '#b31b27',
            color: '#fffa59',
            textDecoration: 'none',
            boxShadow: '0px 0px 8px 1px rgba(0,0,0, .2)',
        },
        [sizes.down('sm')]: {
            marginBottom: '16px',
        },
    },
    RecipeShowTopRight: {
        margin: '16px',
        width: '852px',
        textAlign: 'center',
        [sizes.down('md')]: {
            margin: '12px',
        },
        [sizes.down('sm')]: {
            width: '100%',
            margin: 'auto',
        },
    },
    RecipeShowCardImage: {
        width: '540px',
        height: '400px',
        objectFit: 'cover',
        padding: '0px',
        boxShadow: '0px 0px 28px 8px rgba(0, 0, 0, .25)',
        margin: 'auto',
        [sizes.down('lg')]: {
            width: '400px',
        },
        [sizes.down('md')]: {
            width: '320px',
        },
        [sizes.down('sm')]: {
            width: '400px',
            display: 'block',
            margin: 'auto',
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
        [sizes.down('sm')]: {
            display: 'inline',
        },
        '& h2': {
            textAlign: 'center',
            fontSize: '32px',
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: '300',
            [sizes.down('sm')]: {
                textAlign: 'center',
            },
            [sizes.down('iPhone')]: {
                fontSize: '28px',
            },
        },
    },
    RecipeShowBottomLeft: {
        width: '588px',
        textAlign: 'center',
        [sizes.down('sm')]: {
            width: '100%',
            margin: 'auto',
        },
        '& ul': {
            padding: '0',
        },
        '& li': {
            listStyleType: 'none',
            fontSize: '18px',
            fontWeight: '200',
            lineHeight: '185%',
            [sizes.down('sm')]: {
                fontSize: '17px',
            },
            [sizes.down('iPhone')]: {
                fontSize: '16px',
                lineHeight: '175%',
            },
        },
    },
    RecipeShowBottomRight: {
        width: '852px',
        padding: '0 16px',
        [sizes.down('sm')]: {
            width: '100%',
            margin: 'auto',
            textAlign: 'center',
            padding: '0 8px',
        },
    },
    RecipeShowBottomHR: {
        display: 'none',
        [sizes.down('sm')]: {
            display: 'block',
        },
    },
}