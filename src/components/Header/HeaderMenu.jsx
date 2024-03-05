import React, { useState } from 'react';
import HeaderMenuItems from './HeaderMenuItems';
import burgerIcon from '../../assets/burger.svg';

const HeaderMenu = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const menuHandler = () => {
    setShowMenuItems((e) => !e);
  };
  return (
    <div>
      <button
        type='button'
        className='inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-neutral md:hidden'
        onClick={menuHandler}
      >
        <img src={burgerIcon} alt='burgerIcon' />
      </button>
      <div className='md:hidden'>{showMenuItems && <HeaderMenuItems />}</div>
      <div className='hidden md:block'>
        <HeaderMenuItems />
      </div>
    </div>
  );
};

export default HeaderMenu;
