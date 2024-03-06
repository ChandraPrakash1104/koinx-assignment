import { redirect, useParams } from 'react-router-dom';
import Coin from '../../components/Coin/Coin';
import Sidepanel from '../../components/Sidepanel/Sidepanel';
import { useDispatch } from 'react-redux';
import { fetchCoin } from '../../store/coin-actions';
import { useEffect } from 'react';

const Home = () => {
  const param = useParams();
  console.log(param.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoin(param.id));
  }, [dispatch]);

  return (
    <div className='px-3 lg:px-16 lg:grid lg:grid-cols-6'>
      <div className='lg:col-span-4'>
        <Coin />
      </div>
      <div className='hidden lg:block lg:col-span-2'>
        <Sidepanel />
      </div>
    </div>
  );
};

export default Home;

export const loader = () => {
  return redirect('/bitcoin');
};
