import { createGlobalStyle } from 'styled-components';

import gtaCoBlEot from '../../assets/fonts/GTAmerica-CondensedBlack.eot';
import gtaCoBlTtf from '../../assets/fonts/GTAmerica-CondensedBlack.ttf';
import gtaCoBlWoff from '../../assets/fonts/GTAmerica-CondensedBlack.woff';
import gtaCoBlWoff2 from '../../assets/fonts/GTAmerica-CondensedBlack.woff2';

import nhaasEot from '../../assets/fonts/NHaasGroteskDSPro-55Rg.eot';
import nhaasTtf from '../../assets/fonts/NHaasGroteskDSPro-55Rg.ttf';
import nhaasWoff from '../../assets/fonts/NHaasGroteskDSPro-55Rg.woff';
import nhaasWoff2 from '../../assets/fonts/NHaasGroteskDSPro-55Rg.woff2';


import riLiEot from '../../assets/fonts/Riccione-Light.eot';
import riLiTtf from '../../assets/fonts/Riccione-Light.ttf';
import riLiWoff from '../../assets/fonts/Riccione-Light.woff';
import riLiWoff2 from '../../assets/fonts/Riccione-Light.woff2';

import riLiItEot from '../../assets/fonts/Riccione-LightIta.eot';
import riLiItTtf from '../../assets/fonts/Riccione-LightIta.ttf';
import riLiItWoff from '../../assets/fonts/Riccione-LightIta.woff';
import riLiItWoff2 from '../../assets/fonts/Riccione-LightIta.woff2';

export const Typography = createGlobalStyle`
@font-face {
    font-family: 'NeueHaasGroteskDisp Pro';
    src: url('${nhaasEot}');
    src: url('${nhaasEot}?#iefix') format('embedded-opentype'),
        url('${nhaasWoff2}') format('woff2'),
        url('${nhaasWoff}') format('woff'),
        url('${nhaasTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'GT America Condensed';
    src: url('${gtaCoBlEot}');
    src: url('${gtaCoBlEot}?#iefix') format('embedded-opentype'),
        url('${gtaCoBlWoff2}') format('woff2'),
        url('${gtaCoBlWoff}') format('woff'),
        url('${gtaCoBlTtf}') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Riccione-LightIta';
    src: url('${riLiItEot}');
    src: url('${riLiItEot}?#iefix') format('embedded-opentype'),
        url('${riLiItWoff2}') format('woff2'),
        url('${riLiItWoff}') format('woff'),
        url('${riLiItTtf}') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Riccione';
    src: url('${riLiEot}');
    src: url('${riLiEot}?#iefix') format('embedded-opentype'),
        url('${riLiWoff2}') format('woff2'),
        url('${riLiWoff}') format('woff'),
        url('${riLiTtf}') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

:root {
    --neue: 'NeueHaasGroteskDisp Pro', monospace;
    --gt: 'GT America Condensed', monospace;
    --ricIta: 'Riccione-LightIta', monospace;
    --ric: 'Riccione', monospace;

    --black: #000000;
    --white: #ffffff;
}

p {
    font-size: 1.2rem;
    @media (max-width: 1050px) {
        font-size: 1rem;
    } 
}

em {
    font-family: var(--ricIta);
    font-weight: normal;
    font-style: normal;
}

h1 {
    font-size: 8.1vw;
    font-family: var(--ric);
    font-weight: normal;
    @media (max-width: 780px) {
        font-size: 2.5rem;
    }
}

h2 {
        font-size: 2.5rem;
        font-family: var(--ric) ;
        font-weight: normal;
    @media (max-width: 1250px) {
        font-size: 1.5rem;
    } 
    }
h3 {
    font-size: 7.4vw;
    font-family: var(--ric);
    font-weight: normal;
    @media (max-width: 780px) {
        font-size: 2.5rem;
    }
}

`