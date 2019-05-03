import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * { /* apply style to all elements */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #9B65E6;
        text-rendering: optimizeLegibility !important; /* makes text font more legible on chrome */
        -webkit-font-smoothing: antialiased !important;
        font-family: sans-serif;
    }
`;

export default GlobalStyle;
