import React from 'react';
import { useSelector } from 'react-redux';
import img1 from '../../assets/miniCardImage1.jpg';
import img2 from '../../assets/miniCardImage2.jpg';
import rightArrow from '../../assets/rightArrow.svg';
import Card from '../Card/Card';

const AboutCoin = () => {
  const coin = useSelector((state) => state.coin.data);

  return (
    <Card>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>{`About ${coin?.name}`}</div>
        <div className='font-bold'>{`What is ${coin?.name}`}</div>
        <div className='text-sm leading-6'>{`${coin?.name}'s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.`}</div>
        <div className='font-bold'>Lorem ipsum dolor sit amet</div>
        <div className='text-sm leading-6'>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus. Diam praesent massa
          dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque
          auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque
          interdum. Odio cursus phasellus velit in senectus enim dui. Turpis
          tristique placerat interdum sed volutpat. Id imperdiet magna eget eros
          donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis
          a. Integer dignissim augue viverra nulla et quis lobortis phasellus.
          Integer pellentesque enim convallis ultricies at. Fermentum hendrerit
          imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis
          ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus.
          Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus
          ultrices tincidunt volutpat in eget. Ullamcorper dui
        </div>

        <div className='font-bold'>Already Holding Crypto?</div>
        <div className='space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-12'>
          <div className='max-w-96 bg-gradient-to-r from-cyan-500 to-primary text-white rounded-lg flex p-4 space-x-6  xl:max-w-md'>
            <div>
              <img src={img1} alt='' className='rounded-xl w-32' />
            </div>
            <div className='flex flex-col justify-center space-y-4 w-44'>
              <div className='font-bold text-xl '>Calculate your Profits</div>
              <button className='bg-white text-black px-5 rounded-lg flex text-sm py-2 items-center font-bold w-36'>
                Check Now <img src={rightArrow} alt='' className='ml-3' />
              </button>
            </div>
          </div>

          <div className='bg-gradient-to-r from-orange-500 to-warning text-white rounded-lg flex p-4 space-x-6 max-w-96 xl:max-w-md'>
            <div>
              <img src={img2} alt='' className='rounded-xl w-32' />
            </div>
            <div className='flex flex-col justify-center space-y-4 w-44'>
              <div className='font-bold text-xl '>
                Calculate your tax liability
              </div>
              <button className='bg-white text-black px-5 rounded-lg flex text-sm py-2 items-center font-bold w-36'>
                Check Now <img src={rightArrow} alt='' className='ml-3' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutCoin;
