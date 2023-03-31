import { Link, useParams } from 'react-router-dom';
import { useCountry } from '../context/countries';

export const Country = () => {

    const { countries } = useCountry()
    const countryName = useParams();
    const country = countries.find(country => country.name.common.toLowerCase() === countryName.country)

    console.log(country)
    return (
        <div>

            <Link to="/">
                <button>back</button>
            </Link>
            <br />
            {country.name.common}
        </div>
    )
}
