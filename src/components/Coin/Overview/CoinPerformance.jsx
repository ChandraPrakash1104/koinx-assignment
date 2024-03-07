import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMaxAndMinPrices, numberWithCommas } from '../../util';
import barPointer from '../../../assets/barPointer.svg';

const CoinPerformance = () => {
  const coin = useSelector((state) => state.coin.data);
  const current = coin.market_data?.current_price?.usd;
  const todayHigh = coin.market_data?.high_24h.usd;
  const todayLow = coin.market_data?.low_24h.usd;
  const [fityTwoLow, setFityTwoLow] = useState(0);
  const [fityTwoHigh, setFityTwoHigh] = useState(0);

  useEffect(() => {
    const historyPrices = async () => {
      const data = getMaxAndMinPrices(coin?.id, 7 * 52);
      console.log(data);
      setFityTwoHigh(data?.maxPrice?.toFixed(2));
      setFityTwoLow(data?.minPrice?.toFixed(2));
    };
    historyPrices();
  }, [coin?.id]);

  return (
    <div className='space-y-6'>
      <div className='text-2xl font-semibold '>Performance</div>
      <div className='flex justify-between items-center md:grid md:grid-cols-6'>
        <div className='md:col-span-1'>
          <PerformanceItem
            label='Today’s Low'
            value={numberWithCommas(todayLow)}
          />
        </div>
        <div className='md:col-span-4'>
          <PerformanceBar current={current} high={todayHigh} low={todayLow} />
        </div>
        <div className='md:col-span-1'>
          <div className='flex justify-end'>
            <PerformanceItem
              label='Today’s High'
              value={numberWithCommas(todayHigh)}
            />
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center md:grid md:grid-cols-6'>
        <div className='md:col-span-1'>
          <PerformanceItem
            label='52W Low'
            value={numberWithCommas(fityTwoLow)}
          />
        </div>
        <div className='md:col-span-4'>
          <PerformanceBar
            current={current}
            high={fityTwoHigh}
            low={fityTwoLow}
          />
        </div>
        <div className='md:col-span-1'>
          <div className='flex justify-end'>
            <PerformanceItem
              label='52W High'
              value={numberWithCommas(fityTwoHigh)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPerformance;

const PerformanceItem = ({ label, value }) => {
  return (
    <div className='space-y-2'>
      <div className='text-slate-600 font-semibold text-sm'>{label}</div>
      <div className='text-slate-800 font-semibold'>{value}</div>
    </div>
  );
};

const PerformanceBar = ({ current, high, low }) => {
  const barPosition = ((current - low) / (high - low)) * 100;
  return (
    <div className='w-full'>
      <div className='h-2 min-w-36  bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-md items-stretch relative'>
        <div
          className='absolute -bottom-2 -mt-1'
          style={{
            left: `${barPosition - 5}%`,
          }}
        >
          <img src={barPointer} alt='' />
        </div>
      </div>
    </div>
  );
};
