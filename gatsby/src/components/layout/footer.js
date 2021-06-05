import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {

  const data = useStaticQuery(graphql`
  query  {
    sanitySettings {
    copyright
    social {
      _key
      link
      socialNetwork
    }
    logoCollectiveWhite {
      alt
      asset {
        url
      }
    }
  }
  }
  `)

  const FooterContainer = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  `
  const Copy = styled.div`
    p {
      font-family: var(--neue);
    }
  `

  const Pack = styled.div`
    align-self: center;
    justify-self: flex-end;
    display: flex;
    img {
      width: 150px;
    }
    @media (max-width: 850px) {
      align-self: flex-start;
      margin-top: 20px;
    }
  `

  const SocialNetworks = styled.ul`
  align-self: center;
  margin-right: 30px;

  `

  const Social = styled.li`
  display: inline;
    a {
      color: white;
      font-family: var(--neue);
      margin-left: 15px;
    }
    @media (max-width: 850px) {
      a {
        margin-left: 0;
        margin-right: 15px;
      }
    }
  `
    const logoCollective = data.sanitySettings.logoCollectiveWhite.asset.url;

  return (
    <FooterContainer>
      <Copy>
        <p>{data.sanitySettings.copyright}</p>
      </Copy>
      <Pack>
      <SocialNetworks>
        {data.sanitySettings.social.map(({ link, socialNetwork, _key }) => {
            return (
                <Social key={_key} >
                        <a href={link} target='_blank' rel="noreferrer" >{socialNetwork}</a>
                </Social>
            )
        })}
      </SocialNetworks>
      <img src={logoCollective} alt={data.sanitySettings.logoCollectiveWhite.alt} />
      </Pack>
      
    </FooterContainer>
  )
}

export default Footer
