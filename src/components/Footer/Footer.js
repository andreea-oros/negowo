import React from 'react';
import {FooterWrapper, IconsWrapper,Icon,Divider,CopyrightText,PolicyText,ContentWrapper} from './Footer.style';
import {headerLinks} from '../Header/constants'
import './Footer.css';

export const Footer = () => {

const currentYear = new Date().getFullYear();
console.log(currentYear);


    return (
        <FooterWrapper>
            <Divider/>
            <ContentWrapper>
                <IconsWrapper>
                    <div className="wrapper">
                        <ul>
                            <li className="facebook"><a href="https://www.facebook.com/negowo" target="_blank"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
                            <li className="twitter"><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li className="instagram"><a href="https://instagram.com/negowoo?igshid=MzRlODBiNWFlZA==" target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                            <li className="linkedin"><a href="https://www.linkedin.com/company/negowo/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                    </div></IconsWrapper>
                <CopyrightText>Copyright© {currentYear} Negowo.</CopyrightText>
                <PolicyText href={headerLinks.privacyPolicy}>Privacy Policy</PolicyText>
                <PolicyText href={headerLinks.cookiesPolicy}>Cookies Policy</PolicyText>
            </ContentWrapper>
        </FooterWrapper>
    )
}

