import { useTheme } from "../context/theme";
import sunIcon from "../icons/sunny-outline.svg"
import moonIcon from "../icons/moon-outline.svg"
import { FlexBox } from "./styled/FlexBox";
import { Button } from "./styled/Button.styled";


const Toggle = () => {

    const { theme, toggleTheme } = useTheme()
    return (
        <Button onClick={toggleTheme} >
            <FlexBox justify='space-between' align='center'>
                <img src={theme === "light" ? sunIcon : moonIcon} alt="icon" />
                <span>
                    {theme === "light" ? "Light mode" : "Dark mode"}
                </span>
            </FlexBox>
        </Button>
    );
};

export default Toggle;