import React, { useState } from "react"
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
        alt
      }
      logoCollective {
        asset {
          url
        }
        alt
      }
    }
  }
  `)

const [click, setClick] = useState(false);


  const logo = data.sanitySettings.mainLogo.asset.url;
  const logoCollective = data.sanitySettings.logoCollective.asset.url;


const HeaderStyled = styled.header`
background-color: var(--white);
width: 100%;
height: 60px;
box-sizing: border-box;
position: fixed;
z-index: 1;
display: flex;
flex-direction: row;
@media (max-width: 1050px) {
  height: ${click ? '330px' : '60px'};
  border-bottom: ${click ? 'solid 4px black' : 'none' };
  transition: all .75s ease-in-out;
}
`

const Ham = styled.div`
display: none;
@media (max-width: 1050px) {
  cursor: pointer;
  display: block;
  position: absolute;
  top: 22px;
  left: 20px;
  width: 30px;
  .line {
    width: 100%;
    height: 1px;
    margin-bottom: 7px;
    background-color: black;
  }
}
`

const Left = styled.ul`
li {
  display: inline;
  margin-right: 20px;
  position: absolute;
  top: 22px;
  cursor: pointer;
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
@media (max-width: 1050px) {
  display: ${click ? 'flex' : 'none' };
  flex-direction: column;
  text-align: center;
  align-content: center;
  overflow: hidden;
  margin-top: 160px;
  position: relative;
  z-index: 2;
  background-color: white;
  width: 100%;
  li {
    position: static;
    a {
      font-size: 2rem;
    }
  }
}
`
const Logo = styled(Link)`
#img {
  width: 98vw;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
  transition: all .75s ease-in-out;
}
#img.shrink {
  width: 200px;
  top: 15px;
}
@media (max-width: 1050px) {
  #img {
    top: 50px;
  }
}
`

const LogoCollective = styled(Link)`
img {
  width: 160px;
  position: absolute;
  top: 25px;
  right: 20px;
}
@media (max-width: 1050px) {
  display: none;
}
`
  return (
    <HeaderStyled>
      <Ham className='ham' onClick={() => {setClick(!click)}} >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </Ham>
      <Left>
        <li><a onClick={() => {setClick(!click)}} href='#vision'>Vision</a></li>
        <li><a onClick={() => {setClick(!click)}} href='#wwa'>Who we are</a></li>
        <li><a onClick={() => {setClick(!click)}} href='#team'>Team & partners</a></li>
        <li><a onClick={() => {setClick(!click)}} href='#tech'>Technology</a></li>
      </Left>
      {indexTrue ?
        <Logo to='/' className="logo">
          <img id='img' src={logo} alt={data.sanitySettings.mainLogo.alt} className={scroll ? 'shrink' : ''} />
        </Logo>
        :
        <Logo to='/' className="logo">
          <img id='img' src={logo} alt={data.sanitySettings.mainLogo.alt} className='shrink' />
        </Logo>
      }
      <LogoCollective to='/'>
        <img src={logoCollective} alt={data.sanitySettings.logoCollective.alt} />
      </LogoCollective>
      
    </HeaderStyled>
  )
}

export default Header
