import styled from 'styled-components';
import {media} from "../utils/stylesVariables";

export const FooterWrapper = styled.div`
  display:flex;
  bottom:0;
  flex-direction:column;
  width: 100%;
  background-color:#fcfcfc;
  align-items: center;
  justify-content: flex-start;
`;

export const IconsWrapper = styled.div`
  display:flex;
  margin-bottom: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  margin: 6%;
  ${media.mobileAndTablet}{
  padding: 2rem;
  }
`;

export const Icon = styled.a`
  cursor:pointer;
  padding:16px;
  height: 15.5px;
  width: 14px;
.fa-linkedin-in{
  color:#ECC091;
  font-size:20px;
  :hover{
    color:#fff;
    box-shadow: 0 0 15px  #fff;
    transition: all 0.5s ease;
  }
};
  .fa fa-instagram fa-2x{
    color:#ECC091;
    font-size:1.4em;
    :hover{
      color:#fff;
      background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
      border-radius:4px;
      box-shadow: 0 0 15px  #e6683c;
      transition: all 0.5s ease;
    }
  };
  .fa-twitter{
    color:#ECC091;
    font-size:20px;
    :hover{
      color:#1DA1F2;
      box-shadow: 0 0 15px  #1DA1F2;
      transition: all 0.5s ease;
    }
  };
  .fa-facebook-f{
    color:#ECC091;
    font-size:20px;
    :hover{
      color:#4267B2;
      box-shadow: 0 0 15px  #4267B2;
      transition: all 0.5s ease;
    }
  }
`;

export const Divider = styled.div`
  width:84%;
  border:1px solid #A08B57;
`;

export const CopyrightText = styled.div`
  color:#231f20;
  font-family:'Poppins', serif;
  font-size:0.7em;
  cursor:default;
  margin-bottom: 8px;
`;

export const PolicyText = styled.a`
  text-decoration:none;
  color:#231f20;
  font-family:'Poppins', serif;
  font-size:0.7em;
  cursor:pointer;
`;

export const PolicyHeader = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:2rem 0;
`

export const Links = styled.a`
  overflow-wrap: break-word;
  word-wrap: break-word;
` 

