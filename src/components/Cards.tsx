import { CardProps } from '../interface/CardsProps';
import { FC } from 'react';

import mobileBg from '../images/bg-main-mobile.png';
import desktopBg from '../images/bg-main-desktop.png';
import cardBack from '../images/bg-card-back.png';
import cardLogo from '../images/card-logo.svg';

const Cards: FC<CardProps> = ({ name, cardNumber, cvc, month, year }) => {
  return (
    <div className='relative'>
      <img
        src={mobileBg}
        alt='mobile background'
        role='presentation'
        className='w-full object-cover laptop:hidden'
      />
      <img
        src={desktopBg}
        alt='desktop background'
        role='presentation'
        className='hidden laptop:inline laptop:h-full laptop:w-full laptop:object-cover'
      />
      <div
        className='absolute z-10 -bottom-[20%] left-5 text-white bg-bg-card-front bg-center bg-no-repeat w-3/4 rounded-lg flex flex-col gap-7 p-4 tabletsm:gap-10 
      laptop:bottom-[57.5%] laptop:left-1/4 laptop:w-full laptop:p-6 laptopm:bg-cover laptopm:max-w-[445px]'
      >
        <img src={cardLogo} alt='card logo' className='w-1/4' />
        <div className='flex flex-col gap-2 tabletsm:gap-3'>
          <p className='mobilesm:text-xl tabletsm:text-2xl laptop:tracking-wide laptopm:tracking-widest'>
            {cardNumber ? cardNumber : '0000 0000 0000 0000'}
          </p>
          <div className='flex justify-between text-[0.75rem] mobilesm:text-base laptop:text-[0.85rem]'>
            <p>{name ? name : 'Jane Appleseed'}</p>
            <p>
              <span>{month ? month : '00'}</span>/
              <span>{year ? year : '00'}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='reative rounded-lg absolute bottom-[30%] right-5 w-3/4 laptop:w-full laptop:-right-[40%] laptopm:max-w-[450px] laptopm:bottom-[17.5%] tall:bottom-[25%] tallest:bottom-[35%]'>
        <img src={cardBack} alt='back of card background' className='w-full ' />
        <p className='text-colorWhite text-xs absolute top-[43%] right-8 tabletsm:text-base tabletsm:top-[42.5%] tabletsm:right-10 laptopm:top-[44.5%] laptopm:right-14'>
          {cvc ? cvc : '000'}
        </p>
      </div>
    </div>
  );
};

export default Cards;
