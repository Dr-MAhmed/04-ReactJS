import React from 'react';

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center'>
         <div className='logo font-bold text-white text-2xl'>
            <span className="text-green-500">&lt;</span>
           <span className=''>Pass</span>
            <span className="text-green-500">OP/&gt;</span>
            </div>
      <div className='flex'>
        Created with&nbsp;<img src="icons/heart.png" width={26} alt="heart" />&nbsp;by Muhammad Ahmed.
      </div>
    </div>
  );
}

export default Footer;
