import React from 'react';
import right from '../assets/rightPath.svg';
import { useSelector } from 'react-redux';

const CurrentCoin = () => {
  const coinData = useSelector((state) => state.coin.data);

  return (
    <div className='text-sm font-semibold mt-4 flex items-center space-x-2 my-4'>
      <div className='text-textLight '>{'Cryptocurrencies'}</div>
      <div>
        <img src={right} alt='#' />
      </div>
      <div className='text-textNormal '> {coinData.localization?.en}</div>
    </div>
  );
};

export default CurrentCoin;
