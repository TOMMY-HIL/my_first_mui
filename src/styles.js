import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: '10px'
    },
    icon:{
        marginRight: '20px',
    },
    button: {
        marginTop: '40px'
    },
    cardGrid : {
        padding: '5px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer : {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;