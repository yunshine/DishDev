import sizes from './MediaSizes';

export default {
    Footer: {
        width: '100%',
        height: '48px',
        color: 'white',
        backgroundColor: 'rgba(255, 64, 80, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        zIndex: '2',
        '& p': {
            marginBottom: '0',
        },
        '& a': {
            color: 'white',
            transition: '.1s all ease-in-out',
        },
        '& a:hover': {
            color: '#fffa59',
            textShadow: '0px 0px 3px rgba(0,0,0, .4)',
        },
        [sizes.down('xs')]: {
            padding: '0 8px',
            fontSize: '11px',
        },
    },

    FooterRight: {
        '& a': {
            margin: '0 8px',
        },
    },
}