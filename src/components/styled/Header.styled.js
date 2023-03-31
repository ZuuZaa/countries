import styled from "styled-components";

export const StiledHeader = styled.header`
    padding-block: 2.6rem 3rem;
    background: ${({theme}) => theme.background};
    box-shadow: 0px 1px 10px 0px ${({theme}) => theme.headerShadow};

    h1 {
        font-size: 1.8rem;
        font-weight: 800;
    }
`



