export function convert(
    inputValue,
    inputCurrency,
    outputCurrency,
    exchangeRates
) {
    console.log(exchangeRates);
    return +(
        (inputValue * exchangeRates[outputCurrency]) /
        exchangeRates[inputCurrency]
    ).toFixed(2);
}
