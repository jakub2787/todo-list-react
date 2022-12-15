import { createGlobalStyle } from "styled-components";

export const GlobalStyle =createGlobalStyle`
    html {
        box-sizing: border-box;
    }

        *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background-color: hsl(0, 0%, 95%);
        font-family: 'Lato', sans-serif;
    }
`;