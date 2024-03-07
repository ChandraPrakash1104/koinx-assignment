const AboutTeamMember = ({ name, img }) => {
  return (
    <div className='bg-blue-100 text-sm rounded-lg p-2 space-y-4 lg:flex lg:p-6 lg:space-x-8'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-3'>
          <img src={img} alt='#' className='w-24 rounded-md' />
        </div>
        <div className='font-bold text-md'>{name}</div>
        <div className='text-textLight'>Designation here</div>
      </div>
      <div className='px-4 pb-4 xl:max-w-4xl lg:leading-6'>
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
};

export default AboutTeamMember;
