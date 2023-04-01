import "./converter.scss";
import { ConverterInputField } from "../ConverterInputField/ConverterInputField";
import { useState } from "react";
import { convert } from "../../utils/convert";
import { CURRENCIES_VALUES } from "../../constants/currencies";

export const Converter = ({ exchangeRates }) => {
    const [inputCurrency, setInputCurrency] = useState(CURRENCIES_VALUES.uah);
    const [outputCurrency, setOutputCurrency] = useState(CURRENCIES_VALUES.usd);

    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);

    const handleInputChange = (e) => {
        if (e.target.name === "currency1") {
            const result = convert(
                e.target.value,
                inputCurrency,
                outputCurrency,
                exchangeRates
            );

            setInput(e.target.value);
            setOutput(result);
        } else {
            const result = convert(
                e.target.value,
                outputCurrency,
                inputCurrency,
                exchangeRates
            );

            setOutput(e.target.value);
            setInput(result);
        }
    };

    const handleCurrencyChange = (e) => {
        if (e.target.name === "currency1") {
            const result = convert(
                input,
                inputCurrency,
                e.target.value,
                exchangeRates
            );

            setInput(result);
            setInputCurrency(e.target.value);
        } else {
            const result = convert(
                output,
                outputCurrency,
                e.target.value,
                exchangeRates
            );

            setOutput(result);
            setOutputCurrency(e.target.value);
        }
    };

    return (
        <div className="converter">
            <ConverterInputField
                text="Хочу обміняти"
                currencyValue={inputCurrency}
                setCurrency={handleCurrencyChange}
                inputValue={input}
                setInput={handleInputChange}
                name="currency1"
            />
            <ConverterInputField
                text="Отримаю"
                currencyValue={outputCurrency}
                setCurrency={handleCurrencyChange}
                inputValue={output}
                setInput={handleInputChange}
                name="currency2"
            />
        </div>
    );
};
