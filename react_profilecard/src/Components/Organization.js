import React from 'react';
import Card from './Card';
import { people } from '../Information/AllData';

const Organization = () => {
  return (
    <div className='flex flex-row flex-wrap gap-8 justify-center align-middle border-solid border-black border-2 rounded-xl w-7/12 p-4'>
      {people.map(item => <Card avatar={item.avatar} name={item.name} designation={item.designation} linkedIn={item.linkedIn} twitter={item.twitter} github={item.github}/>)}
    </div>
  )
}

export default Organization
