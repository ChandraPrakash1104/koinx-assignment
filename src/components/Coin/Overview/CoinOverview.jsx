import React from 'react';
import CoinPerformance from './CoinPerformance';
import Card from '../../Card/Card';

const CoinOverview = () => {
  return (
    <div>
      <div className='flex space-x-5 justify-center text-slate-600 my-6 font-semibold'>
        <div className='text-primary border-b-2 border-primary'>Overview</div>
        <div>Fundamentals</div>
        <div>News Insights</div>
      </div>
      <Card>
        <CoinPerformance />
      </Card>
    </div>
  );
};

export default CoinOverview;
