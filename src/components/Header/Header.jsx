import "./header.scss";

export const Header = ({ exchangeRates }) => (
    <header className="header">
        <h1 className="header__title">Конвертер валют</h1>

        <div className="header__currency">
            <p className="header__usd">1 UAH = {exchangeRates.usd} USD</p>
            <p className="header__eur">1 UAH = {exchangeRates.eur} EUR</p>
        </div>
    </header>
);
