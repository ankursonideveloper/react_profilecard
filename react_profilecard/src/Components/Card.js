import React from 'react';
import SocialLinks from './SocialLinks';

const Card = (props) => {
  return (
    <div className='flex flex-col justify-center items-center border-2 border-orange-600 rounded-sm p-3 w-64'>
      <img src={props.avatar} alt={props.name} className="w-32 h-32 object-cover mx-auto mb-2 rounded-full" />
      <p className="text-lg font-semibold">{props.name}</p>
      <p className="text-sm text-gray-600">{props.designation}</p>
      <hr className="my-2 w-full border-t" />
      <SocialLinks linkedIn={props.linkedIn} twitter={props.twitter} github={props.github} />
    </div>
  );
};


export default Card
