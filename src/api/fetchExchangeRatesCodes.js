import { EXCHANGE_RATE_URL } from "../constants/api";

export const fetchExchangeRatesCodes = async () => {
    try {
        const response = await fetch(`${EXCHANGE_RATE_URL}`);
        const data = await response.json();

        return data;
    } catch (err) {
        console.log(err);
    }
};
