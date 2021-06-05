import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';


const Vision = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanitySettings {
            logoCollective {
                asset {
                    url
                }
                alt
            }
        }
        sanityHome {
            heroVision {
                background {
                    asset {
                    url
                    }
                }
                description
                text
                icon {
                    asset {
                        url
                    }
                    alt
                }
            }
            visionBox1 {
                color
                icon {
                    asset {
                        url
                    }
                    alt
                }
            }
            visionBox2 {
                _rawText
                bottomText
            }
            visionBox3 {
                _rawTopText
                bottomText
            }
            visionBox4 {
                topText
                bottomText
                logos {
                    asset {
                        url
                        id
                    }
                    alt
                }
            }
        }
    }
    `)

const VisionContainer = styled.section``
const HeroVision = styled.div`
    background-image: url(${data.sanityHome.heroVision.background.asset.url});
    background-size: cover;
    padding: 30px;
    color: var(--white);
    border-top: solid 4px black;
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
        background: none;
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

const Boxes = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`

const Box1 = styled.div`
    background-color: #${data.sanityHome.visionBox1.color};
    width: 50vw;
    height: 50vw;
    display: flex;
    justify-content: center;
    border-right: solid 4px black;
    border-bottom: solid 4px black;
    img {
        width: 30%;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: solid 4px black;
    p {
        font-family: var(--neue);
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100vh;
    }
`
const Box3 = styled.div`
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
        img {
            width: 150px;
        }
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100vh;
        border-right: none;
    }
`

const Box4 = styled.div`
    text-align: center;
    width: 50vw;
    height: 50vw;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: solid 4px black;
.logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    margin: 0 auto;
    gap: 50px;
    box-sizing: border-box;
    img {
        align-self: center;
        justify-self: center;
    }
}
a {
        text-transform: uppercase;
        font-family: var(--gt);
        text-decoration: underline;
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100vh;
    }
`

    return(
        <VisionContainer id='vision'>
            <HeroVision>
                <h1>{data.sanityHome.heroVision.text}</h1>
                <div>
                    <p>{data.sanityHome.heroVision.description}</p>
                    <img alt={data.sanityHome.heroVision.icon.alt} src={data.sanityHome.heroVision.icon.asset.url} />
                </div>
            </HeroVision>
            <Boxes>
                <Box1>
                    <img src={data.sanityHome.visionBox1.icon.asset.url} alt={data.sanityHome.visionBox1.icon.alt} />
                </Box1>
                <Box2>
                    <BlockContent blocks={data.sanityHome.visionBox2._rawText} />
                    <p>{data.sanityHome.visionBox2.bottomText}</p>
                </Box2>
                <Box3>
                    <BlockContent blocks={data.sanityHome.visionBox3._rawTopText} />
                    <div className='bottom'>
                        <p>{data.sanityHome.visionBox3.bottomText}</p>
                        <img src={data.sanitySettings.logoCollective.asset.url} alt={data.sanitySettings.logoCollective.alt} />
                    </div>
                </Box3>
                <Box4>
                    <p>{data.sanityHome.visionBox4.topText}</p>
                    <div className='logos'>
                        {data.sanityHome.visionBox4.logos.map(({ asset, alt }) => {
                        return (
                            <img key={asset.id} src={asset.url} alt={alt} />
                        )
                        })}
                    </div>

                    <a href='#who' >{data.sanityHome.visionBox4.bottomText}</a>
                </Box4>
            </Boxes>
        </VisionContainer>

    )

    
}



export default Vision