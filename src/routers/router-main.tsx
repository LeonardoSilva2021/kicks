import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../views/pages/private/landing/landing-page"
import React from "react"
import { MainPage } from "../views/pages/private/main/main-page"

export const RouterMain = () => {
    return (
        <>
            <MainPage>
                <Routes>
                    <Route Component={LandingPage} path="/" />
                </Routes>
            </MainPage>
        </>
    )
}