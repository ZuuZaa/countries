import { Card } from '../components/Card';
import { FlexBox } from '../components/styled/FlexBox';
import { useCountry } from '../context/countries';

export const Home = () => {

    const {countries} = useCountry()

    return (
        <FlexBox gap='7.2rem' justify='space-evenly'>
            {countries?.map(item => {
                return (
                    <Card 
                    key={item.cca3} 
                    id={item.id}
                    flag={item.flags.png} 
                    name={item.name.common} 
                    population={item.population}
                    capital={item.capital}
                    />
                )
            })}
        </FlexBox>
    )
}


