import { redirect, useParams } from 'react-router-dom';
import Coin from '../../components/Coin/Coin';
import Sidepanel from '../../components/Sidepanel/Sidepanel';
import { useDispatch } from 'react-redux';
import { fetchCoin } from '../../store/coin-actions';
import { useEffect } from 'react';

import AboutCoin from '../../components/About/AboutCoin';
import AboutTeam from '../../components/About/AboutTeam';
import Trending from '../../components/TrendingCoins/Trending';
import CurrentCoin from '../../components/CurrentCoin';

const Home = () => {
  const param = useParams();
  console.log(param.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoin(param.id));
  }, [dispatch]);

  return (
    <div className='px-3 lg:px-16 '>
      <div>
        <CurrentCoin />
      </div>
      <div className='lg:grid lg:grid-cols-6 space-y-8 lg:space-y-0 lg:space-x-8'>
        <div className='lg:col-span-4 space-y-6'>
          <Coin />
          <AboutCoin />
          <AboutTeam />
        </div>
        <div className='lg:col-span-2 space-y-8 '>
          <Sidepanel />
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default Home;

export const loader = () => {
  return redirect('/bitcoin');
};
