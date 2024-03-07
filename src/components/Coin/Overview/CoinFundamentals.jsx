import React, { useEffect, useState } from 'react';
import info from '../../../assets/info.svg';
import { useSelector } from 'react-redux';
import {
  getMaxAndMinPrices,
  getTradingVolume,
  numberWithCommas,
} from '../../util';

const CoinFundamentals = () => {
  const coin = useSelector((state) => state.coin.data);
  console.log(coin);
  const [sevenDayHigh, setSevenDayHigh] = useState(0);
  const [sevenDayLow, setSevenDayLow] = useState(0);
  const [tradingVolume, setTradingVolume] = useState(0);

  useEffect(() => {
    const historyPrices = async () => {
      const data = await getMaxAndMinPrices(coin?.id, 7);
      setSevenDayHigh(data?.maxPrice.toFixed(2));
      setSevenDayLow(data?.minPrice.toFixed(2));

      const volume = await getTradingVolume(coin?.id);
      console.log(volume);
      setTradingVolume(volume);
    };
    historyPrices();
  }, [coin.id]);

  return (
    <div>
      <div className='flex items-center space-x-2'>
        <div className='font-semibold text-lg text-slate-800'>Fundamentals</div>
        <div>
          <img src={info} alt='#' />
        </div>
      </div>

      <div>
        <ValuePair
          label={`${coin?.name} Price`}
          value={`$${numberWithCommas(coin.market_data?.current_price.usd)}`}
        />
        <ValuePair
          label='24h Low / 24h High'
          value={`$${numberWithCommas(
            coin.market_data?.high_24h.usd
          )} / $${numberWithCommas(coin.market_data?.high_24h.usd)}`}
        />
        <ValuePair
          label='7d Low / 7d High'
          value={`$${numberWithCommas(sevenDayLow)} / $${numberWithCommas(
            sevenDayHigh
          )}`}
        />
        <ValuePair
          label='Trading Volume'
          value={`$${numberWithCommas(tradingVolume)}`}
        />
        <ValuePair label='Market Cap Rank' value={coin.market_cap_rank} />
        <ValuePair
          label='Market Cap'
          value={coin?.market_data?.market_cap.usd}
        />
      </div>
    </div>
  );
};

export default CoinFundamentals;

const ValuePair = ({ label, value }) => {
  return (
    <div className='flex items-center justify-between text-sm font-medium py-2 my-2 border-b border-gray-300'>
      <div className='text-slate-500 '>{label}</div>
      <div>{value}</div>
    </div>
  );
};
