import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"



const Header = ({ scroll, indexTrue }) => {
  const data = useStaticQuery(graphql`
  query  {
    sanitySettings {
      mainLogo {
        asset {
          url
        }
      }
      logoCollective {
        asset {
          url
        }
      }
    }
  }
  `)

  const logo = data.sanitySettings.mainLogo.asset.url;
  const logoCollective = data.sanitySettings.logoCollective.asset.url;
  return (
    <HeaderStyled>
      <Left>
        <li><Link to=''>Vision</Link></li>
        <li><Link to=''>Who we are</Link></li>
        <li><Link to=''>Team & partners</Link></li>
        <li><Link to=''>Technology</Link></li>
      </Left>
      {indexTrue ?
        <Logo to='/' className="logo">
          <img id='img' src={logo} alt="Jumpcut" className={scroll ? 'shrink' : ''} />
        </Logo>
        :
        <Logo to='/' className="logo">
          <img src={logo} alt="Jumpcut" />
        </Logo>
      }
      <LogoCollective to='/'>
        <img src={logoCollective} alt="Jumpcut" />
      </LogoCollective>
      
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: row;
`

const Left = styled.ul`
  li {
    display: inline;
    margin-right: 20px;
    position: absolute;
    top: 22px;
    a {
      font-family: var(--neue);
      text-transform: uppercase;
      font-size: 0.8rem;
      position: relative;
      &:hover {
        font-family: var(--gt);
        letter-spacing: 0.2px;
      }
    }
    &:nth-child(1) {
      left: 20px;
    }
    &:nth-child(2) {
      left: 85px;
    }
    &:nth-child(3) {
      left: 190px;
    }
    &:nth-child(4) {
      left: 325px;
    }
  }
`
const Logo = styled(Link)`
  align-self: auto;
  justify-self: center;
  line-height: 0;
  #img {
    width: 98vw;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translateX(-50%);
    transition: all .75s ease-in-out;
    transform: translateX(-50%);
  }
  #img.shrink {
    width: 200px;
    top: 30px;
  }
`

const LogoCollective = styled(Link)`
  img {
    width: 80px;
    position: absolute;
    top: 30px;
    right: 20px;
  }
`

export default Header
