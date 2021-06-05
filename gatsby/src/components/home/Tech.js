import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';


const Tech = () => {
    const data = useStaticQuery(graphql`
    query  {
        sanityHome {
        technology {
            color
            title
            bottomText
            icon {
                asset {
                    url
                }
                alt
            }
        }
        text {
            _rawBlockContent
            _key
        }
    }
    }
    `)
    const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
    }
    `
    const Sticky = styled.div`
        background-color: #${data.sanityHome.technology.color};
        position: sticky;
        top: 60px;
        z-index: 0;
        width: 50vw;
        height: calc(100vh - 60px);
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: solid 4px black;
        border-right: solid 4px black;
        h2 {
            font-size: 7.4vw;
            font-family: var(--ric);
            font-weight: normal;
            @media (max-width: 780px) {
                font-size: 2.5rem;
            }
        }
        div {
            display: flex;
            justify-content: space-between;
            img {
                width: 20%;
            }
            p {
                font-family: var(--gt);
                text-transform: uppercase;
                align-self: flex-end;
                width: 70%;
            }
        }
        @media (max-width: 850px) {
            width: 100%;
            height: 100vh;
            border-right: none;
            position: static;
            height: 100vw;
            width: 100%;
        }
    `
    const ScrollContainer = styled.div``
    const Scroll = styled.div`
        border-bottom: solid 4px black;
        width: 50vw;
        height: 50vw;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        strong {
            font-family: var(--gt);
            text-transform: uppercase;
        }
        img {
            width: 50px;
            align-self: flex-end;
        }
    @media (max-width: 850px) {
        width: 100%;
        height: 50vh;
        img {
            width: 30px;
        }
    }
    `

    return(
        <Container id='tech'>
            <Sticky>
                <h2>{data.sanityHome.technology.title}</h2>
                <div>
                    <p>{data.sanityHome.technology.bottomText}</p>
                    <img src={data.sanityHome.technology.icon.asset.url} alt={data.sanityHome.technology.icon.alt} />
                </div>
            </Sticky>
            <ScrollContainer>
                {data.sanityHome.text.map(({ _rawBlockContent, _key }) => {
                        return (
                            <Scroll key={_key} >
                                    <div>
                                        <BlockContent blocks={_rawBlockContent} />
                                    </div>
                                    <img src='/arrow.svg' alt='arrow Jumpcut' />
                            </Scroll>
                        )
                    })}
            </ScrollContainer>

        </Container>
    )
}

export default Tech