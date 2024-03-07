import { FC } from 'react';
import { ThanksProps } from '../interface/ThanksProps';
import completeImg from '../images/icon-complete.svg';

const Thanks: FC<ThanksProps> = ({
  setConfirmed,
  setCardNumber,
  setCvc,
  setMonth,
  setName,
  setYear,
}) => {
  const closeHandler = (): void => {
    setConfirmed(false);
    setCardNumber('');
    setCvc('');
    setMonth('');
    setName('');
    setYear('');
  };
  return (
    <div className='flex flex-col justify-center items-center text-center gap-10 py-20 px-5 laptop:p-20 laptopm:p-36'>
      <img src={completeImg} alt='complete image' />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-semibold tracking-wider'>Thank You!</h1>
        <p className='font-bold text-colorDarkGrayViolet'>
          We've added your card details
        </p>
      </div>
      <button
        className='bg-colorDarkViolet text-colorLightGrayViolet w-full py-2 rounded-md font-bold'
        type='button'
        onClick={closeHandler}
      >
        Continue
      </button>
    </div>
  );
};

export default Thanks;
