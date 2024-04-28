import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles({
    cardRoot: {
        padding: '32px'
    },
    card: {
        borderRadius: '24px',
        height: '96px',
        width: '100%',
        display: 'flex',
        padding: '16px',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center'
    },
    headerStart: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '40px',
        alignItems: 'center'
    },
    newDrop: {
        cursor: 'pointer'
    },
    buttonMenu: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
    }, 
    headerEnd: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '40px',
    },
    buttonHeaderEnd: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    notifications: {
        background: '#FFA52F'
    }
})