import styled from "styled-components";

export const StyledCard = styled.div `
    background: ${({theme}) => theme.background};
    border-radius: 0.7rem;
    box-shadow: 0px 7px 15px -3px rgba(0,0,0,0.1);
    transition: all .5s;
    width: 26.8rem;

    img {
        width: 100%;
        height: 16rem;
        border-radius: .7rem .7rem 0 0;
    }

    ul {
        padding: 2.4rem;
        font-size: 1.4rem;

        h2 {
            font-weight: 600;
            margin-bottom: 2rem;     
        }

        li {
            font-weight: 300;
            margin-bottom: 1.2rem;
            
        }
    }

    &:hover {
        transform: scale(1.04)
    }


    
`
