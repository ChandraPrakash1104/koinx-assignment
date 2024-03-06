const Card = ({ children }) => {
  return (
    <div className='bg-white p-4 rounded-lg border-slate-200 border lg:p-6'>
      {children}
    </div>
  );
};

export default Card;
