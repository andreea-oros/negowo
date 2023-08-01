import React from "react";
import {HomepageWrapper,UnderConstructionwrapper, IconWrapper, UnderConstructionText,
    UnderConstructionTextSocial, LaptopWrapper} from './Homepage.style';

export const Homepage = () => {
    return (
        <HomepageWrapper>
            <UnderConstructionwrapper>
                <LaptopWrapper>
                    <IconWrapper>
                        <i className="fas fa-cog"/>
                    </IconWrapper>
                </LaptopWrapper>
                <UnderConstructionText>COMING SOON</UnderConstructionText>
                <UnderConstructionTextSocial>
                    Meanwhile feel free to interact with our social networks
                </UnderConstructionTextSocial>
            </UnderConstructionwrapper>
        </HomepageWrapper>
    )
}
