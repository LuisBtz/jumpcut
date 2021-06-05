import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react';

const Team = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanityHome {
            heroTeam {
                title
                color
                bottomText
                icon {
                    alt
                    asset {
                        url
                    }
                }
                imageTeams {
                    asset {
                        url
                    }
                    alt
                }
                
            }
            teamMember {
                name
                _rawDescription
                photo {
                    alt
                    asset {
                        url
                    }
                }
            }
        }
    }
    `)

    const TeamContainer = styled.section``
    const Hero = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
        .left {
            background-color: #${data.sanityHome.heroTeam.color};
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
                p {
                    align-self: flex-end;
                    font-family: var(--gt);
                    text-transform: uppercase;
                }
                img {
                    width: 150px;
                }
            }
            @media (max-width: 850px) {
                width: 100%;
                height: 100vh;
                border-right: none;
            }
        }
        .right {
            background-color: #F5F5F5;
            width: 50vw;
            height: 50vw;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            border-bottom: solid 4px black;
            img {
                width: 80%;
                margin: 0 auto;
            }
            @media (max-width: 850px) {
                width: 100%;
                height: 100vh;
            }
        }
    `
    const MembersContainer = styled.div`
    
    `

    const Member = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .img {
        background-position: center;
        background-size: cover;
        width: 50vw;
        height: 50vw;
        border-bottom: solid 4px black;

    }
    .info {
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: solid 4px black;
        h2 {
            font-size: 7.4vw;
            font-family: var(--ric);
            font-weight: normal;
            @media (max-width: 780px) {
                font-size: 2.5rem;
            }
        }
        strong {
            font-family: var(--gt);
            font-weight: normal;
            text-transform: uppercase;
        }
        em {
            font-family: var(--ricIta);
            font-style: normal;
            font-weight: normal;
        }
        @media (max-width: 850px) {
            padding: 20px;
        }
    }
    &:nth-child(odd) {
        .img {
            border-right: solid 4px black;
        }
    }
    &:nth-child(even) {
        grid-auto-flow: dense;
        .info {
            border-right: solid 4px black;
        }
        .img {
            grid-column: 2;
        }
        @media (max-width: 850px) {
            grid-auto-flow: unset;
            .img {
                grid-column: 1;
            }
        }
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
        .img, .info {
            width: 100vw;
            height: 100vh;
        }
    }
    `
    
    return(
        <TeamContainer id='team'>
            <Hero>
                <div className='left'>
                    <h3>{data.sanityHome.heroTeam.title}</h3>
                    <div>
                        <p>{data.sanityHome.heroTeam.bottomText}</p>
                        <img alt={data.sanityHome.heroTeam.icon.alt} src={data.sanityHome.heroTeam.icon.asset.url} />
                    </div>
                </div>
                <div className='right'>
                    <img alt={data.sanityHome.heroTeam.imageTeams.alt} src={data.sanityHome.heroTeam.imageTeams.asset.url} />
                </div>
            </Hero>
            <MembersContainer>
                {data.sanityHome.teamMember.map(({ name, _rawDescription, photo, _key }) => {
                    return (
                        <Member key={_key} >
                            <div className='img' style={{ backgroundImage: `url(${photo.asset.url})` }}></div>
                            <div className='info'>
                                <h2>{name}</h2>
                                <div>
                                    <BlockContent blocks={_rawDescription} />
                                </div>
                            </div>
                        </Member>
                    )
                })}

            </MembersContainer>
        </TeamContainer>
    )
}

export default Team