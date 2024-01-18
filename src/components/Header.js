import React from 'react';
import logo from '../assets/logo.svg';
const Header = () => {
  return <div className='py-5 pb-5 ' >
    <div className='container mx-auto '>
      <div className='flex justify-between  item-center'>
        <a href='#'>
          <img src={logo} className=''></img>
        </a>
        <button className='btn btn-sm'>work with me</button>
      </div>
    </div>
  </div>;
};

export default Header;
