import React from "react";
import {PageRouter} from "../router/PageRouter";
import {BaseWrapper, ContentWrapper} from './Layout.style';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header'

export const Layout = () => {
    return (
        <BaseWrapper>
            <Header/>
            <ContentWrapper>
                <PageRouter/>
            </ContentWrapper>
            <Footer/>
        </BaseWrapper>
    )
}