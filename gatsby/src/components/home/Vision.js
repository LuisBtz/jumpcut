import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Vision = () => {

    const data = useStaticQuery(graphql`
    query  {
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
        p {
            width: 80%;
        }
        img {
            width: 15%;
        }
    }
`

    return(
        <VisionContainer>
            <HeroVision>
                <h1>{data.sanityHome.heroVision.text}</h1>
                <div>
                    <p>{data.sanityHome.heroVision.description}</p>
                    <img src={data.sanityHome.heroVision.icon.asset.url} />
                </div>
            </HeroVision>
        </VisionContainer>

    )

    
}



export default Vision