import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    card: {
        height: '750px',
        borderRadius: '64px',
        position: 'relative'
    },
    descriptionContent: {
        height: '67px',
        width: '237px',
        rotate: '-90deg',
        background: '#232321',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: -85,
        top: 200,
        borderRadius: '0px 0px 20px 20px',
    },
    texto: {
        color: 'white',
        fontWeight: 600
    },
    noticeContent: {
        position: 'absolute',
        bottom: '32px',
        left: '32px',
        width: '490px'
    },
    noticeTittle: {
        color: 'white',
        fontSize: '64px',
        fontWeight: 600
    },
    noticeText: {
        color: 'white',
        fontSize: '24px',
        paddingBottom: '24px'
    },
    noticeButton: {
        background: '#4A69E2',
        height: '48px',
        width: '138px',
        borderRadius: '8px'
    },
    cardsContainer: {
        position: 'absolute',
        bottom: '32px',
        right: '32px',
    },
    cardEmxample1: {
        paadingTop: '16px'
    },
    cardEmxample2: {
        paddingBottom: '16px'
    }
})