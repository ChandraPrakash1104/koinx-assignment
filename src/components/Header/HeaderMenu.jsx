import React, { useState } from 'react';
import HeaderMenuItems from './HeaderMenuItems';
import burgerIcon from '../../assets/burger.svg';
import { useDispatch } from 'react-redux';
import { toggleHeaderMenu } from '../../store/header-menu-slice';

const HeaderMenu = () => {
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggleHeaderMenu());
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
      <div className='hidden md:block'>
        <HeaderMenuItems />
      </div>
    </div>
  );
};

export default HeaderMenu;
