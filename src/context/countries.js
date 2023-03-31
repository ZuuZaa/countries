import { createContext, useContext, useEffect, useState } from "react";

const CountriesContext = createContext(null);

const useCountry = () => {
  const [countries, setCountries] = useContext(CountriesContext);
  return { countries, setCountries };
};

const CountriesProvider = ({ children }) => {

  const [countries, setCountries] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all"
    ).then((response) => response.json());
    setCountries(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, useCountry };
