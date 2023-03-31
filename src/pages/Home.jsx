
import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';
import { FlexBox } from '../components/styled/FlexBox';

export const Home = () => {

    const [countries, setCountries] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
            "https://restcountries.com/v3.1/all"
        ).then((response) => response.json());
        console.log(response)
        setCountries(response);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <FlexBox gap='7.2rem' justify='space-evenly'>
            {countries?.map(item => {
                return (
                    // <div>
                    //     <div style={{width: '20rem', height: '16rem'}}>
                    //         <img src={item.flags.png} alt="flag" style={{width:"100%", height: "100%"}}/>
                    //     </div>
                    // </div>

                    <Card 
                    key={item.id} 
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


