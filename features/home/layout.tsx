import React from 'react';

import Image from 'next/image';

import { posts } from './constants';

const HomePageLayout = () => {
  return (
    <div className='justify-center text-center mx-auto bg-sky-50 px-4 pb-24'>
      {posts.map((post) => (
        <div key={post.id} className='max-w-2xl mx-auto mb-16'>
          <Image
            className='rounded-md mb-4'
            src={post.thumbnailUrl}
            alt={post.title}
            width={500}
            height={400}
          />
          <div className='text-left'>
            <h1 className='text-2xl font-semibold'>{post.title}</h1>
            <p className='text-md text-amber-600 italic'>{post.description}</p>
          </div>
          <p className='text-[13px] text-right italic text-slate-400'>
            {post.created_at.toDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomePageLayout;
