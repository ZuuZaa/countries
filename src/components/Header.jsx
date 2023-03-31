import { Container } from './styled/Container.styled'
import { FlexBox } from './styled/FlexBox'
import { StiledHeader } from './styled/Header.styled'
import Toggle from './Toggle'


export const Header = () => {
    return (
        <StiledHeader>
            <Container>
                <FlexBox justify='space-between' align='center'>
                    <h1>Where in the world?</h1>
                    <Toggle />
                </FlexBox>
            </Container>
        </StiledHeader>
    )
}
