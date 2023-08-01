import React, {useState} from 'react';
import {Wrapper,LogoWrapper,SideMenuButtonWrapper,ButtonWrapper,ButtonText,RequestButtonWrapper,MobileMenuItemsWrapper,
    HeaderDesktopContent, MobileMenuWrapper,LinkItem, SideMenuButtonLineOne,SideMenuButtonLineTwo,
    SideMenuButtonLineThree, LogoImg} from './Header.style';
import {headerLinks} from "./constants";
import Fade from 'react-reveal/Fade'; 

export const Header = (props) => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    
    return (
        <Fade top cascade>
        <Wrapper>            
            <LogoWrapper href={headerLinks.homepage}>
                NEGOWO [logo]
            </LogoWrapper>
            <HeaderDesktopContent>
                <ButtonWrapper href={headerLinks.aboutUs}><ButtonText>About us</ButtonText></ButtonWrapper>
                <ButtonWrapper href={headerLinks.services}><ButtonText>Services</ButtonText></ButtonWrapper>
                <ButtonWrapper href={headerLinks.portfolio}><ButtonText>Portfolio</ButtonText></ButtonWrapper>
                <RequestButtonWrapper href={headerLinks.contactUs}>
                    <div className="svg-wrapper">
                        <svg height="50" width="280" xmlns="http://www.w3.org/2000/svg">
                            <rect id="shape" height="40" width="280"/>
                            <text  className="text" x="12" y="24" fill="#A08B57" cursor="pointer" pointerEvents="none"> Request for quotation </text>
                        </svg>
                    </div></RequestButtonWrapper>
            </HeaderDesktopContent>
            <SideMenuButtonWrapper  isOpen={mobileMenuIsOpen} onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)} >
                <SideMenuButtonLineOne isOpen={mobileMenuIsOpen}/>
                <SideMenuButtonLineTwo isOpen={mobileMenuIsOpen}/>
                <SideMenuButtonLineThree isOpen={mobileMenuIsOpen}/>
            </SideMenuButtonWrapper>
            {mobileMenuIsOpen &&
            <MobileMenuWrapper>
                <MobileMenuItemsWrapper>
                    <LinkItem href={headerLinks.aboutUsMobile} onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)}>About us</LinkItem>
                    <LinkItem href={headerLinks.services} onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)}>Services</LinkItem>
                    <LinkItem href={headerLinks.portfolio} onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)}>Portfolio</LinkItem>
                    <LinkItem href={headerLinks.contactUs} onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)}>Request for quotation</LinkItem>
                </MobileMenuItemsWrapper>
            </MobileMenuWrapper>
            }
        </Wrapper>
        </Fade>
    )
}
