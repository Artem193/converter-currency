import "./app.scss";
import { Header } from "./components/Header/Header";
import { Converter } from "./components/Converter/Converter";
import { useEffect, useState } from "react";
import { fetchExchangeRatesCodes } from "./api/fetchExchangeRatesCodes";

function App() {
    const [exchangeRates, setExchangeRates] = useState({
        usd: 0,
        uah: 0,
        eur: 0,
    });

    useEffect(() => {
        fetchExchangeRatesCodes().then((data) => {
            setExchangeRates((prev) => ({
                ...prev,
                eur: data.conversion_rates.EUR,
            }));
            setExchangeRates((prev) => ({
                ...prev,
                usd: data.conversion_rates.USD,
            }));
            setExchangeRates((prev) => ({
                ...prev,
                uah: data.conversion_rates.UAH,
            }));
        });
    }, []);

    return (
        <div>
            <Header exchangeRates={exchangeRates} />
            <main>
                <Converter exchangeRates={exchangeRates} />
            </main>
        </div>
    );
}

export default App;
