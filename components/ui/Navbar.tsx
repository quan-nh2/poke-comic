import React from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';
import classnames from 'classnames';

import {
  GiAnimalSkull,
  GiBookAura,
  GiHomeGarage,
  GiAwareness,
} from 'react-icons/gi';

const Navbar = () => {
  const router = useRouter();

  const isActive = (href: string) => {
    if (router.asPath === href) {
      return 'active';
    }

    return null;
  };

  return (
    <nav
      className={classnames(
        'fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'
      )}
    >
      <div className='container mx-auto'>
        <div className='w-full bg-orange-100 h-[72px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          <Link
            className={classnames(
              `cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-amber-500 ${isActive(
                '/'
              )}`
            )}
            href='/'
          >
            <GiHomeGarage size={20} />
          </Link>
          <Link
            className={classnames(
              `cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-amber-500 ${isActive(
                '/pokedex'
              )}`
            )}
            href='/pokedex'
          >
            <GiAnimalSkull size={20} />
          </Link>
          <Link
            className={classnames(
              `cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-amber-500 ${isActive(
                '/story'
              )}`
            )}
            href='/story'
          >
            <GiBookAura size={20} />
          </Link>
          <Link
            className={classnames(
              `cursor-pointer w-[60px] h-[60px] flex items-center justify-center text-amber-500 ${isActive(
                '/profile'
              )}`
            )}
            href='/profile'
          >
            <GiAwareness size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
