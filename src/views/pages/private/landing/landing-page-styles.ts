import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    root: {
        padding: '32px',
        '& --grid-gutter': '64px'
    }
})