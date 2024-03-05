import HeaderMenuItem from './HeaderMenuItem';

const HeaderMenuItems = () => {
  return (
    <div className='w-full absolute right-0 bg-white space-y-4 p-4 md:w-auto md:flex md:static md:p-0 md:space-y-0 md:bg-transparent md:items-center md:space-x-8 2xl:space-x-14 '>
      <HeaderMenuItem label='Crypto Taxes' />
      <HeaderMenuItem label='Free Tools' />
      <HeaderMenuItem label='Resource Center' />
      <div className='bg-gradient-to-r from-cyan-600 to-primary text-white px-3 rounded-md py-2 md:py-2 md:px-8 '>
        <HeaderMenuItem label='Get Started' />
      </div>
    </div>
  );
};

export default HeaderMenuItems;
