import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCard } from './styled/Card.styled'

export const Card = ({ name, population, region, capital, flag }) => {
    return (
        <Link to={name.toLowerCase()}>
            <StyledCard>
                <img src={flag} alt="flag" />
                <ul>
                    <li>
                        <h2>{name}</h2>
                    </li>
                    <li>
                        Population: {population}
                    </li>
                    <li>
                        Region: {region}
                    </li>
                    <li>
                        Capital: {capital}
                    </li>
                </ul>
            </StyledCard>
        </Link>
    )
}
