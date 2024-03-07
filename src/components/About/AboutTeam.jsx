import React from 'react';
import AboutTeamMember from './AboutTeamMember';
import Card from '../Card/Card';
import img1 from '../../assets/image1.png';

const AboutTeam = () => {
  return (
    <Card>
      <div className='space-y-3 lg:space-y-6'>
        <div className='text-2xl font-bold'>Team</div>
        <div className='leading-6'>
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <AboutTeamMember name='John Smith' img={img1} />
        <AboutTeamMember name='Elina Williams' img={img1} />
        <AboutTeamMember name='John Smith' img={img1} />
      </div>
    </Card>
  );
};

export default AboutTeam;
