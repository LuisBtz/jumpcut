import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from '@sanity/block-content-to-react';

const Members = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanityCollective {
            heroCollective2 {
                _rawText
                bottomText
                _rawJoin
                color
            }
            membersTitle
            littleText
            icon {
                alt
                asset {
                        url
                }
            }
            member {
                _rawDescription
                name
                _key
                photo {
                    asset {
                    url
                    }
                }
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
    .hero {
        padding: 40px;
        background-color: #E87923;
        h2 {
            font-size: 8.1vw;
            font-family: var(--ric);
            font-weight: normal;
            @media (max-width: 780px) {
                font-size: 2.5rem;
            }
        }
        div {
            display: flex;
            justify-content: space-between;
            p {
                align-self: flex-end;
            }
            img {
                width: 150px;
            }
        }
    }
    .join {
        padding: 40px;
        & > h2 {
            font-size: 8.1vw;
            font-family: var(--ric);
            font-weight: normal;
            @media (max-width: 780px) {
                font-size: 2.5rem;
            }
        }
        p {
            font-size: 2.5rem;
            font-family: var(--ric) ;
            font-weight: normal;
            strong {
                font-family: var(--gt);
                text-transform: uppercase;
                font-weight: normal;
            }
            @media (max-width: 1250px) {
                font-size: 1.5rem;
            } 
        }
    }
    .box {
        width: 50vw;
        height: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-size: cover;
        position: relative;
        overflow: hidden;
        .info {
            display: block;
            background-color: white;
            padding: 20px;
            position: absolute;
            width: 100%;
            top: 88%;
            border-top: solid 4px black;
            h2 {
                margin-bottom: 50px;
            }
        }
        @media (max-width: 850px) {
            width: 100%;
            height: 100vh;
            border-right: none;
            .info {
                top: auto;
                bottom: 0;
            }
        }
        &:nth-child(odd) {
            border-bottom: solid 4px black;
            border-right: solid 4px black;
        }
        &:nth-child(even) {
            border-bottom: solid 4px black;
        }
    }
    `

    return (
        <Container >
            <div className='box hero'>
                <h2>{data.sanityCollective.membersTitle}</h2>
                <div>
                    <p>{data.sanityCollective.littleText}</p>
                    <img src={data.sanityCollective.icon.asset.url} alt={data.sanityCollective.icon.alt} />
                </div>
            </div>
            {data.sanityCollective.member.map(({ _rawDescription, name, _key, photo }) => {
            return (
                <div className='member box' key={_key} style={{ backgroundImage: `url(${photo.asset.url})` }}>
                    <div className='info'>
                        <h2>{name}</h2>
                        <BlockContent blocks={_rawDescription} />
                    </div>
                </div>
            )
            })}
            <div className='box join'>
                <h2>Interested in joining?</h2>
                <div>
                    <BlockContent blocks={data.sanityCollective.heroCollective2._rawJoin} />
                </div>
            </div>
        </Container>
    )
}

export default Members