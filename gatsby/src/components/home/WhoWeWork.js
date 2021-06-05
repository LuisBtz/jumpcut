import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react';

const WhoWeWork = () => {
    const data = useStaticQuery(graphql`
    query  {
        sanityHome {
            whoWeWorkWith {
                color
                topText
                bottomText
                _rawPartners
            }
        }
    }
    `)

const Container = styled.section`
    background-color: #${data.sanityHome.whoWeWorkWith.color};
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    padding-right: 40px;
    padding-left: 40px;
    border-bottom: solid 4px black;
    div {
        margin-top: 100px;
        margin-bottom: 100px;
        h2 {
            font-size: 7.4vw;
            font-family: var(--gt);
            text-transform: uppercase;
            font-weight: normal;
            @media (max-width: 780px) {
                font-size: 2.5rem;
            }
        }
    }

`
    return(
        <Container id='who'>
            <p>{data.sanityHome.whoWeWorkWith.topText}</p>
            <div>
                <BlockContent blocks={data.sanityHome.whoWeWorkWith._rawPartners} />
            </div>
            <p>{data.sanityHome.whoWeWorkWith.bottomText}</p>
        </Container>
    )
}

export default WhoWeWork