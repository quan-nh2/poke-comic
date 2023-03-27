import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { GiHeartWings } from 'react-icons/gi';

const Header = () => {
  return (
    <header className='py-2 divide-y' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Image src='/logo.png' alt='My Logo' width={50} height={50} />
          </Link>
          <GiHeartWings size={36} className='text-amber-500' />
        </div>
      </div>

      <div className='mt-2'></div>
    </header>
  );
};

export default Header;
