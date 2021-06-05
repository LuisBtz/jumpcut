import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Wwa = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanityHome {
            wwaHero {
                color
                topText
                bottomText
                icon {
                    asset {
                        url
                    }
                    alt
                }
            }
            wwaBox1 {
                topText
                bottomText
                mail
            }
            wwaBox2 {
                bottomText
                icon {
                    asset {
                        url
                    }
                    alt
                }
            }
        }
    }
    `)
    const WwaContainer = styled.section``
    const Boxes = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`
    const Hero = styled.div`
        background-color: #${data.sanityHome.wwaHero.color};
        padding: 30px;
        border-bottom: solid 4px black;
        
        div {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
    }
    p {
        font-family: var(--gt);
        text-transform: uppercase;
        font-size: 1.3rem;
        width: 50%;
        align-self: flex-end;
        justify-self: baseline;
    }
    img {
        width: 110px;
        align-self: flex-end;
        justify-self: baseline;
    }
    @media (max-width: 780px) {
        color: var(--black);
        div {
            margin-top: 300px;
        }
        p {
            width: 80%;
        }
        img {
            width: 15%;
        }
    }
    `
const Box1 = styled.div`
    width: 50vw;
    height: 50vw;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: solid 4px black;
    border-right: solid 4px black;
    div {
        display: flex;
        justify-content: space-between;
        a {
            font-family: var(--gt);
            text-transform: uppercase;
        }
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100vh;
        border-right: none;
    }
`

const Box2 = styled.div`
    width: 50vw;
    height: 50vw;
    padding: 40px;
    border-bottom: solid 4px black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: relative;
        width: 40%;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
    }
    p {
        justify-self: baseline;
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100vh;
    }
`
    return(
        <WwaContainer id='wwa'>
            <Hero>
                <h3>{data.sanityHome.wwaHero.topText}</h3>
                    <div>
                        <p>{data.sanityHome.wwaHero.bottomText}</p>
                        <img alt={data.sanityHome.wwaHero.icon.alt} src={data.sanityHome.wwaHero.icon.asset.url} />
                </div>
            </Hero>
            <Boxes>
            <Box1>
                <h2>{data.sanityHome.wwaBox1.topText}</h2>
                <div>
                    <p>{data.sanityHome.wwaBox1.bottomText}</p>
                    <a href={'mailto:'+data.sanityHome.wwaBox1.mail}>{data.sanityHome.wwaBox1.mail}</a>
                </div>
            </Box1>
            <Box2>
                <img src={data.sanityHome.wwaBox2.icon.asset.url} alt={data.sanityHome.wwaBox2.icon.alt} />
                <p>{data.sanityHome.wwaBox2.bottomText}</p>
            </Box2>
            </Boxes>
        </WwaContainer>
    )
}
export default Wwa;