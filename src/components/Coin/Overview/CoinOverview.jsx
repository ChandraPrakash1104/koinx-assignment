import React from 'react';
import CoinPerformance from './CoinPerformance';
import Card from '../../Card/Card';
import CoinFundamentals from './CoinFundamentals';

const CoinOverview = () => {
  return (
    <div className='mb-6'>
      <div className='flex space-x-5 justify-center text-slate-600 my-6 font-semibold'>
        <div className='text-primary border-b-2 border-primary'>Overview</div>
        <div>Fundamentals</div>
        <div>News Insights</div>
      </div>
      <Card>
        <div className='space-y-10'>
          <CoinPerformance />
          <CoinFundamentals />
        </div>
      </Card>
    </div>
  );
};

export default CoinOverview;
