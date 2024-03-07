import axios from 'axios';
import { HistoricalChart } from '../config/api';

export function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const getMaxAndMinPrices = async (id, days) => {
  try {
    const response = await axios.get(HistoricalChart(id, days));
    const prices = response.data.prices;
    const maxPrice = Math.max(...prices.map((price) => price[1]));
    const minPrice = Math.min(...prices.map((price) => price[1]));
    return { maxPrice, minPrice };
  } catch (error) {
    console.error(error);
  }
};

export const getTradingVolume = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
    );

    const coinData = response.data[`${coinId}`];
    const tradingVolume = coinData.total_volume_24h;

    console.log(response.data[`${coinId}`]);
    console.log(`Trading Volume of ${coinId}: ${tradingVolume} USD`);
    return tradingVolume;
  } catch (error) {
    console.error('Error fetching trading volume:', error);
    return null;
  }
};
