import { CardProps } from '../interface/CardsProps';
import { FC } from 'react';

import mobileBg from '../images/bg-main-mobile.png';
import cardBack from '../images/bg-card-back.png';
import cardLogo from '../images/card-logo.svg';

const Cards: FC<CardProps> = ({ name, cardNumber, cvc, month, year }) => {
  return (
    <div className='relative'>
      <img
        src={mobileBg}
        alt='mobile background'
        className='w-full object-cover'
      />
      <div className='absolute z-10 -bottom-[20%] left-5 text-white bg-bg-card-front bg-center bg-no-repeat w-3/4 rounded-md flex flex-col gap-7 p-4'>
        <img src={cardLogo} alt='card logo' className='w-1/4' />
        <div className='flex flex-col gap-2'>
          <p>{cardNumber ? cardNumber : '0000 0000 0000 0000'}</p>
          <div className='flex justify-between text-[0.75rem]'>
            <p>{name ? name : 'Jane Appleseed'}</p>
            <p>
              <span>{month ? month : '00'}</span>/
              <span>{year ? year : '00'}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='reative rounded-md absolute bottom-[30%] right-5 w-3/4 '>
        <img src={cardBack} alt='back of card background' />
        <p className='text-colorWhite text-xs absolute top-[43%] right-8'>
          {cvc ? cvc : '000'}
        </p>
      </div>
    </div>
  );
};

export default Cards;
