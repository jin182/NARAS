import { useState } from 'react';
import style from './Searchbar.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Searchbar({ q }) {
    const [search, setSearch] = useState('');
    const nav = useNavigate();
    useEffect(() => {
        setSearch(q);
    }, [q]);
    const onchangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClickSearch();
        }
    };
    const onClickSearch = () => {
        if (search !== '') {
            nav(`/search?q=${search}`);
        } else {
            nav('/');
        }
    };
    return (
        <div className={style.container}>
            <input
                value={search}
                onKeyDown={onKeyDown}
                onChange={onchangeSearch}
                placeholder="검색어를 입력하세요..."
            />
            <button onClick={onClickSearch}>검색</button>
        </div>
    );
}
