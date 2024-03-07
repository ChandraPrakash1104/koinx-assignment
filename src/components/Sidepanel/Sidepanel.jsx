import React from 'react';
import sidePanelImage from '../../assets/sidePanel.svg';
import rightArrow from '../../assets/rightArrow.svg';

const Sidepanel = () => {
  return (
    <div className='bg-primary text-white rounded-xl p-12 flex flex-col justify-center items-center space-y-6 flex-wrap'>
      <div className='text-2xl font-semibold text-center'>
        Get Started with KoinX <br />
        for FREE
      </div>
      <div className='text-center max-w-96'>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <div>
        <img src={sidePanelImage} alt='' />
      </div>
      <div>
        <button className='bg-white text-black px-6 py-3 rounded-lg flex items-center font-semibold md:text-lg'>
          Get Started for FREE
          <img src={rightArrow} alt='' className='ml-3' />
        </button>
      </div>
    </div>
  );
};

export default Sidepanel;
