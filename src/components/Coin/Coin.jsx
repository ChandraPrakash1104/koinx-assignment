import React, { useEffect } from 'react';
import CoinInfo from './CoinInfo';
import CoinOverview from './Overview/CoinOverview';

const Coin = () => {
  return (
    <div>
      <CoinInfo />
      <CoinOverview />
    </div>
  );
};

export default Coin;
