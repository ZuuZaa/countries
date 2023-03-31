import styled from "styled-components";

export const Container = styled.div`
    padding-inline: 7.6rem;
`

export const MainContainer = styled(Container)`
    padding-block: ${props => props.paddingBlock};
    min-height: 100vh;
`