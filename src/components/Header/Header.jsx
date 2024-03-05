import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <div className='bg-white h-14 lg:h-16 flex items-center justify-between px-4 lg:px-16 cursor-pointer select-none relative'>
      <HeaderLogo />
      <HeaderMenu />
    </div>
  );
};

export default Header;
