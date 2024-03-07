import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Chart from '../Chart/Chart';
import { numberWithCommas } from '../util';
import up from '../../assets/up.svg';
import down from '../../assets/down.svg';

const CoinInfo = () => {
  const coinData = useSelector((state) => state.coin.data);
  const profit = coinData?.market_data?.price_change_percentage_24h >= 0;
  return (
    <div>
      <Card>
        <div className='space-y-1 mb-6'>
          <div className='flex space-x-2 lg:space-x-12 items-center font-semibold mb-4'>
            <div className='flex items-center space-x-2'>
              <div>
                <img src={coinData.image?.thumb} alt='#' />
              </div>
              <div className='text-lg lg:text-xl'>
                {coinData.localization?.en}{' '}
              </div>
              <div className='text-sm text-textLight'>
                {coinData?.symbol?.toUpperCase()}
              </div>
            </div>
            <div className='bg-textLight text-white rounded-md px-2 py-1 font-normal'>
              Rank #{coinData.market_cap_rank}
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='font-bold text-3xl'>
              ${numberWithCommas(coinData.market_data?.current_price.usd)}
            </div>
            <div className='flex space-x-3'>
              {profit && (
                <div className='flex text-success font-semibold px-2 py-1 bg-green-100 rounded-md '>
                  <img src={up} alt='profit icon' className='m-1' />
                  {coinData?.market_data?.price_change_percentage_24h?.toFixed(
                    2
                  )}
                  %
                </div>
              )}
              {!profit && (
                <div className='flex text-warning font-semibold px-2 py-1 bg-red-100 rounded-md'>
                  <img src={down} alt='loss Icon' className='m-1' />
                  {coinData?.market_data?.price_change_percentage_24h?.toFixed(
                    2
                  )}
                  %
                </div>
              )}

              <div className='text-textLight flex items-center text-sm'>
                (24H)
              </div>
            </div>
          </div>
          <div className='font-semibold '>
            ₹{numberWithCommas(coinData.market_data?.current_price.inr)}
          </div>
        </div>
        <div className='text-sm font-semibold my-2'>
          {coinData.localization?.en} Price Chart (USD)
        </div>
        <div className='h-72 lg:h-[50vh]'>
          <Chart />
        </div>
      </Card>
    </div>
  );
};

export default CoinInfo;
