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
        // marginBottom: '-48px',
        // position: 'absolute',
        // bottom: '0',
        padding: '0 40px',
        zIndex: '2',
        '& a': {
            color: 'white',
        },
        '& p': {
            marginBottom: '0',
        }
    },
}


// .footer-right a {
//     color: rgba(50, 193, 233, 1);
//     margin: 0 16px;
//     transition: all 0.1s ease-in-out;
// }

// .footer-right a:hover {
//     color: rgba(46, 178, 214, 1);
//     scale: 1.2;
// }

// .footer-div h6 {
//     color: rgba(50, 193, 233, 1);
//     margin: 0;
// }

// @media only screen and (max-width: 576px) {
//     .footer-div {
//         padding: 0 16px;
//     }

//     .footer-right  a {
//         margin: 0 4px;
//     }

//     .footer-div h6, .footer-div i {
//         font-size: 14px;  
//     }
// }