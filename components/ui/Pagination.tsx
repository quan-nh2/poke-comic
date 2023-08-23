import React, { MouseEvent } from 'react';

import { ArrowLeftIcon } from '@/components/icon/ArrowLeft';

import { Icon } from '../icon/Icon';

type PaginationProps = {
  page: number;
  count: number;
  onPageChange: (val: number) => void;
};

const treeDot = '...';
const maxNumDisplay = 5;

const Pagination = ({
  page,
  count,
  onPageChange,
}: PaginationProps): JSX.Element => {
  const canPrev = page > 1;
  const canNext = page < count;

  let totalPages = [] as (string | number)[];
  if (count <= maxNumDisplay) {
    totalPages = Array.from(Array(count).keys());
  }

  if (count > maxNumDisplay) {
    const startNum = 0;
    const endNum = count - 1;
    const maxNumRangDisplay = maxNumDisplay - 1;

    totalPages = [startNum, treeDot, page - 2, page - 1, page, treeDot, endNum];

    const isFirstRange = maxNumRangDisplay;
    if (page < isFirstRange) {
      totalPages = [
        ...Array.from(Array(maxNumRangDisplay).keys()),
        treeDot,
        endNum,
      ];
    }

    const isLastRange = count - maxNumRangDisplay;
    if (page > isLastRange) {
      totalPages = [
        startNum,
        treeDot,
        ...Array(maxNumDisplay)
          .fill(0)
          .map((_, idx) => endNum - maxNumRangDisplay + idx),
      ];
    }
  }

  const onPagePrev = () => {
    if (!canPrev) {
      return;
    }
    return onPageChange(page - 1);
  };

  const onPageClick = (e: MouseEvent<HTMLSpanElement>) => {
    const { index } = e.currentTarget.dataset;
    if (!index) {
      return;
    }
    return onPageChange(~~index);
  };

  const onPageNext = () => {
    if (!canNext) {
      return;
    }

    return onPageChange(page + 1);
  };

  return (
    <nav aria-label='navigation'>
      <ul className='inline-flex'>
        <li className='hidden lg:inline-block'>
          <span
            onClick={onPagePrev}
            className={`inline-block h-full w-auto px-2 sm:px-3 cursor-pointer ${
              !canPrev
                ? 'text-secondary-60 cursor-not-allowed'
                : ' text-primary-main'
            }`}
          >
            <Icon icon={<ArrowLeftIcon />} />
          </span>
        </li>

        {totalPages.map((num, index) => {
          if (typeof num === 'string') {
            return (
              <li key={`pagination-item-${index}`}>
                <span className='inline-block h-full w-auto px-2 sm:px-3'>
                  {num}
                </span>
              </li>
            );
          }

          const value = num + 1;
          const isActive = value === page;
          return (
            <li key={`pagination-item-${index}`}>
              <span
                data-index={value}
                onClick={onPageClick}
                className={`inline-block h-full w-auto px-2 sm:px-3 cursor-pointer ${
                  isActive ? 'font-bold border-b-2 border-primary-main' : ''
                }`}
              >
                {value}
              </span>
            </li>
          );
        })}

        <li className='hidden lg:inline-block'>
          <span
            onClick={onPageNext}
            className={`inline-block h-full w-auto px-2 sm:px-3 cursor-pointer ${
              !canNext
                ? 'text-secondary-60 cursor-not-allowed'
                : ' text-primary-main'
            }`}
          >
            <Icon className='rotate-180' icon={<ArrowLeftIcon />} />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

Pagination.defaultProps = {
  className: '',
  pageSize: 10,
};
