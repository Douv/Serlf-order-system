import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    navy: {
        backgroundColor: '#003080',
    },
    red: {
        backgroundColor: '#FF2040',
        color: '#ffffff',
    },
    main: {
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        displar: 'flex',
        color: '#ffffff',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    green: {
        backgroundColor: '#00B020',
    },
    largeLogo: {
        height: 100,
    },    
    logo: {
        height: 50,
    },

    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: { margin: 10 },
    space: { padding: 10 },
}))