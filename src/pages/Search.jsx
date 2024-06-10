import { useSearchParams } from 'react-router-dom';
import { fetchSearchResults } from '../api';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Search() {
    const [searchparams, setSearchParams] = useSearchParams();
    const q = searchparams.get('q');
    const [countries, setCountries] = useState([]);

    const setInitData = async () => {
        const data = await fetchSearchResults(q);
        setCountries(data);
    };

    useEffect(() => {
        setInitData();
    }, [q]);
    return <div>Search {searchparams.get('q')}</div>;
}
