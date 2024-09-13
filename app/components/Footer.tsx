import React from 'react';

export default function Footer() {
  return (
    <footer className=" bg-[#ffcb08] text-white p-4 text-center bottom-0 left-0 rounded-tl-[999%] rounded-tr-[100%] w-[510px] ml-auto [@media(max-width:576px)]:w-[300px]">
      <img src="/pokeball.png" className='fixed top-0 max-w-[55px] ball' alt="" />
      <p className='text-black [@media(max-width:576px)]:text-[13px] [@media(max-width:576px)]:text-right'>
        Developed by{' '}
        <a
          href="https://www.linkedin.com/in/ardakeyisoglu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-bold hover:underline"
        >
          Arda Keyişoğlu
        </a>
      </p>
    </footer>
  );
}
