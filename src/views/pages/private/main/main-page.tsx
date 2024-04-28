import { FC, ReactNode } from "react";
import { HeaderPage } from "../header/header-page";
import { useMainPageStyles } from "./main-page-styles";

type Props = {
    children?: ReactNode;
}

export const MainPage: FC<Props> = ({ children }) => {

    const classes = useMainPageStyles();

    return (
        <>
            <div className={classes.root}>
                <HeaderPage />
                {children}
            </div>
        </>
    )
}