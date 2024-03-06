import { useSelector } from 'react-redux';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderMenuItems from './HeaderMenuItems';

const Header = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);

  return (
    <div>
      <div className='bg-white py-3 lg:h-16 flex items-center justify-between px-4 lg:px-16 cursor-pointer select-none '>
        <HeaderLogo />
        <HeaderMenu />
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <HeaderMenuItems />
        </div>
      )}
    </div>
  );
};

export default Header;
