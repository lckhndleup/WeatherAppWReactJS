import React, { useContext,createContext, useState } from 'react';
import { CityContext } from './CityContext';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const {cityData} = useContext(CityContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const filteredData = cityData.filter((data) => {
        return data && data.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(filteredData);
    };
    

    const values = { searchTerm, searchResults, handleSearchChange, handleSearch}
    return (
        <SearchContext.Provider value={values}>
            {children}
        </SearchContext.Provider>
    );
    };

export default SearchProvider;
