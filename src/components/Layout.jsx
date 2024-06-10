import style from './Layout.module.css';
import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
    const nav = useNavigate();

    const onClickHeader = () => {
        nav(`/`);
    };

    return (
        <div>
            <header onClick={onClickHeader} className={style.header}>
                <div>
                    <img
                        src="https://i.namu.wiki/i/1XTQG1_LE6wVDFsDJ7ncwpdIxFVJI4FUOX_LnPFY2bSOnTxI9Tn3iLQbYUgAn3w4K23sSQFg_BfkB6Jpkuo60g.webp"
                        alt="GBSW"
                        width={15}
                    />{' '}
                    NARA
                </div>
            </header>
            <main className={style.main}>{children}</main>
        </div>
    );
}
