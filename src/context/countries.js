import { createContext, useContext, useEffect, useState } from "react";

const CountriesContext = createContext([]);
// const todoListFromLocalStorage = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")).todoList : [];

const useCountry = () => {
    const [countries, setCountries] = useContext(CountriesContext);
    return {countries, setCountries};
};

const CountriesProvider = ({ children }) => {

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
        <CountriesContext.Provider value={[countries, setCountries]}>
            {children}
        </CountriesContext.Provider>
    );
};

export { CountriesProvider, useCountry };