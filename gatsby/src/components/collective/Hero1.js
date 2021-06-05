import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const Hero1 = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanityCollective {
            heroCollective {
                topText
                bottomText
                icon {
                    alt
                    asset {
                        url
                    }
                }
                color
            }
        }
    }
    `)

const Container = styled.section``
const Hero1 = styled.div`
    background-color: #${data.sanityCollective.heroCollective.color};
    background-size: cover;
    padding: 30px;
    color: var(--black);
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
        width: 15%;
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

    return (
        <Container>
            <Hero1>
                <h1>{data.sanityCollective.heroCollective.topText}</h1>
                <div>
                    <p>{data.sanityCollective.heroCollective.bottomText}</p>
                    <img alt={data.sanityCollective.heroCollective.icon.alt} src={data.sanityCollective.heroCollective.icon.asset.url} />
                </div>
            </Hero1>
        </Container>
    )
}

export default Hero1;