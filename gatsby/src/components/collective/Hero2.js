import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import { useStaticQuery, graphql } from "gatsby"


const Hero2 = () => {
    const data = useStaticQuery(graphql`
    query  {
        sanityCollective {
            heroCollective2 {
                _rawText
                bottomText
                _rawJoin
                color
            }
        }
    }
    `)


const Container = styled.section``
const Hero2 = styled.div`
    background-color: #${data.sanityCollective.heroCollective2.color};
    background-size: cover;
    padding: 30px;
    color: var(--black);
    border-top: solid 4px black;
    border-bottom: solid 4px black;
    strong {
        text-transform: uppercase;
        font-family: var(--gt);
    }
    .pack {
        margin-top: 300px;
        display: flex;
        justify-content: space-between;
    }
    p.text {
        width: 50%;
        align-self: flex-end;
        .join {
        }
    }
    @media (max-width: 780px) {
        color: var(--black);
        .pack {
            margin-top: 300px;
            flex-direction: column;
        }
        p.text {
            width: 80%;
            align-self: flex-start;
        }
    }
`
    return (
        <Container>
            <Hero2>
                <BlockContent blocks={data.sanityCollective.heroCollective2._rawText} />
                <div className='pack'>
                    <p className='text'>{data.sanityCollective.heroCollective2.bottomText}</p>
                    <div className='join'>
                        <BlockContent blocks={data.sanityCollective.heroCollective2._rawJoin} />
                    </div>
                </div>
            </Hero2>
        </Container>
    )
}

export default Hero2