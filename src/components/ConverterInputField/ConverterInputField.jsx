import "../Converter/converter.scss";
import "./input.scss";
import { CURRENCIES_SELECT_OPTIONS } from "../../constants/currencies";

export const ConverterInputField = ({
    text,
    currencyValue,
    setCurrency,
    inputValue,
    setInput,
    name,
}) => {
    return (
        <div className="converter__input-field">
            <p class="converter__text">{text}</p>

            <div className="input">
                <input
                    type="number"
                    className="input__sum"
                    onChange={(e) => {
                        setInput(e);
                    }}
                    min={0}
                    value={inputValue}
                    name={name}
                />

                <select
                    name={name}
                    className="input__currency"
                    value={currencyValue}
                    onChange={(e) => setCurrency(e)}
                >
                    {CURRENCIES_SELECT_OPTIONS.map(({ value, label }) => (
                        <option value={value}>{label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};
