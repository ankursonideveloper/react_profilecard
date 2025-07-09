import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa" ;

const SocialLinks = (props) => {
  return (
    <div className='flex flex-row justify-center gap-4'>
      <a href={props.linkedIn}><FaLinkedinIn color='blue'/></a>
      <a href={props.twitter}><FaSquareXTwitter color='blue'/></a>
      <a href={props.github}><FaGithubSquare color='blue'/></a>
    </div>
  )
}

export default SocialLinks
