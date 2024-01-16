import React from 'react';
import logo from '../assets/logo.svg';
const Header = () => {
  return <div className=' py-8' >
    <div className='container mx-auto '>
      <div className='flex justify-between  item-center'>
        <a href='#'>
          <img src={logo}></img>
        </a>
        <button className='btn btn-sm'>work with me</button>
      </div>
    </div>
  </div>;
};

export default Header;
