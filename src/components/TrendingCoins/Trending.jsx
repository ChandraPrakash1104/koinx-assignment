import axios from 'axios';
import { useEffect, useState } from 'react';
import { TrendingCoins } from '../../config/api';
import up from '../../assets/up.svg';
import down from '../../assets/down.svg';
import Card from '../Card/Card';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    console.log(data);
    setTrending(data.slice(0, 3));
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <Card>
      <div className='space-y-4 lg:space-y-6'>
        <div className='text-xl font-semibold py-2'>Trending Coins (24h)</div>
        {trending.map((item) => (
          <div className='flex justify-between' key={item.id}>
            <div className='flex items-center space-x-1'>
              <div>
                <img src={item.image} alt='#' className='w-7' />
              </div>
              <div>
                {item.id}({item.symbol})
              </div>
            </div>
            <div>
              {item.market_cap_change_percentage_24h >= 0 ? (
                <div className='flex text-success'>
                  <img src={up} alt='#' className='m-2' />
                  {item.market_cap_change_percentage_24h.toFixed(2)}%
                </div>
              ) : (
                <div className='flex text-warning'>
                  <img src={down} alt='#' className='m-2' />
                  {item.market_cap_change_percentage_24h.toFixed(2)}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Trending;
