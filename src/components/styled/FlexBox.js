import styled from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    gap: ${({gap}) => gap || 0};
    flex-wrap: wrap;
`