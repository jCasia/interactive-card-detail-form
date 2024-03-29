import { useState } from 'react';
import Cards from './components/Cards';
import Thanks from './components/Thanks';
import { ValidationErrors } from './interface/ValidationType';

const App = () => {
  const [name, setName] = useState('');
  const [isNameValid, setisNameValid] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [isCardNumberValid, setIsCardNumberValid] = useState(true);
  const [cvc, setCvc] = useState('');
  const [isCvcValid, setIsCvcValid] = useState(true);
  const [month, setMonth] = useState('');
  const [isMonthValid, setIsMonthValid] = useState(true);
  const [year, setYear] = useState('');
  const [isYearValid, setIsYearValid] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setError] = useState<ValidationErrors>();

  const FormHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const validationErrors: ValidationErrors = {
      name: '',
      cardNumber: '',
      monthYear: '',
      cvc: '',
    };

    if (!name.trim()) {
      validationErrors.name = 'Full name is required';
    }
    if (!cardNumber) {
      validationErrors.cardNumber = 'Card number is required';
    } else if (cardNumber.length < 19) {
      validationErrors.cardNumber = 'Full card number required';
    }
    if (!year) {
      validationErrors.monthYear = "Can't be blank";
    }
    if (!cvc) {
      validationErrors.cvc = "Can't be blank";
    } else if (cvc.length < 3) {
      validationErrors.cvc = 'Full cvc required';
    }

    if (
      name.trim() &&
      cardNumber &&
      cardNumber.length === 19 &&
      month &&
      year &&
      cvc &&
      cvc.length === 3
    ) {
      setConfirmed(true);
    }

    setError(validationErrors);
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.validity.valid) {
      setisNameValid(true);
      setName(e.target.value);
      setError({ ...errors, name: '' });
    } else {
      setisNameValid(false);
    }
  };
  const cardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.validity.valid) {
      setIsCardNumberValid(true);
      setCardNumber(e.target.value);
      setError({ ...errors, cardNumber: '' });
    } else {
      setIsCardNumberValid(false);
    }
  };

  const monthHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.validity.valid) {
      setIsMonthValid(true);
      setMonth(e.target.value);
      setError({ ...errors, monthYear: '' });
    } else {
      setIsMonthValid(false);
    }
  };

  const yearHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.validity.valid) {
      setIsYearValid(true);
      setYear(e.target.value);
      setError({ ...errors, monthYear: '' });
    } else {
      setIsYearValid(false);
    }
  };

  const cvcHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.validity.valid) {
      setIsCvcValid(true);
      setCvc(e.target.value);
      setError({ ...errors, cvc: '' });
    } else {
      setIsCvcValid(false);
    }
  };

  return (
    <main className='w-full h-screen tabletsm:flex tabletsm:justify-center tabletsm:items-center laptop:block laptoplg:flex laptoplg:justify-center   '>
      <div className='tabletsm:max-w-[450px] flex flex-col gap-10 laptop:max-w-full laptop:grid laptop:grid-rows-1 laptop:grid-cols-[350px_1fr] laptop:h-full laptop:gap-52 laptopm:grid-cols-[475px_1fr] laptopm:w-[1550px] '>
        <Cards
          name={name}
          cardNumber={cardNumber}
          cvc={cvc}
          month={month}
          year={year}
        />
        {confirmed ? (
          <Thanks
            setConfirmed={setConfirmed}
            setName={setName}
            setCardNumber={setCardNumber}
            setCvc={setCvc}
            setMonth={setMonth}
            setYear={setYear}
          />
        ) : (
          <form
            className='flex flex-col gap-4 px-5 py-10 mobilesm:gap-6 laptop:justify-center laptop:w-4/5 laptop:p-0 laptopm:w-4/5 laptopm:px-20 '
            onSubmit={FormHandler}
          >
            <div className='join '>
              <label className='label' htmlFor='name'>
                Cardholder Name
              </label>
              <input
                type='text'
                className={`input placeholder:text-colorLightGrayViolet focus:outline-none focus:ring ${
                  isNameValid
                    ? 'focus:ring-colorLinBlue'
                    : 'focus:ring-colorRed'
                } `}
                id='name'
                name='name'
                value={name}
                onChange={nameHandler}
                placeholder='e.g. Jane Appleseed'
                pattern='[a-zA-Z_ ]+'
                autoComplete='false'
                maxLength={20}
              />
              <p className='warning'>
                {isNameValid ? '' : 'Please only type letters'}
              </p>
              {errors?.name && <p className='warning'>{errors.name}</p>}
            </div>
            <div className='join'>
              <label className='label' htmlFor='cardNumber'>
                Card Number
              </label>
              <input
                type='text'
                className={`input placeholder:text-colorLightGrayViolet focus:outline-none focus:ring ${
                  isCardNumberValid
                    ? 'focus:ring-colorLinBlue'
                    : 'focus:ring-colorRed'
                } `}
                id='cardNumber'
                name='cardNumber'
                pattern='^[1-9][\.\d_ ]*(,\d+)?$'
                value={cardNumber}
                onChange={cardNumberHandler}
                placeholder='e.g 1234 5678 9123 0000'
                maxLength={19}
              />
              <p className='warning'>
                {isCardNumberValid ? '' : 'Please only type numbers'}
              </p>
              {errors?.cardNumber && (
                <p className='warning'>{errors.cardNumber}</p>
              )}
            </div>
            <div className='grid grid-rows-1 grid-cols-2 gap-2'>
              <div className='join'>
                <label htmlFor='month' className='label'>
                  Exp date (MM/YY)
                </label>
                <div className='join'>
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      className={`input-date placeholder:text-colorLightGrayViolet focus:outline-none focus:ring ${
                        isMonthValid
                          ? 'focus:ring-colorLinBlue'
                          : 'focus:ring-colorRed'
                      } `}
                      id='month'
                      name='dateMonth'
                      value={month}
                      onChange={monthHandler}
                      pattern='^([1-9]|[0-1][0-2])$'
                      placeholder='MM'
                      maxLength={2}
                    />
                    <label
                      htmlFor='year'
                      aria-label='year'
                      className='label screenreader'
                    >
                      year
                    </label>
                    <input
                      type='text'
                      className={`input-date placeholder:text-colorLightGrayViolet focus:outline-none focus:ring ${
                        isYearValid
                          ? 'focus:ring-colorLinBlue'
                          : 'focus:ring-colorRed'
                      } `}
                      id='year'
                      name='dateYear'
                      value={year}
                      onChange={yearHandler}
                      pattern='^[2-9][\.\d]*(,\d+)?$'
                      placeholder='YY'
                      maxLength={2}
                    />
                  </div>
                </div>
                {errors?.monthYear && (
                  <p className='warning'>{errors.monthYear}</p>
                )}
              </div>
              <div className='join'>
                <label htmlFor='cvc' className='label'>
                  CVC
                </label>
                <input
                  type='text'
                  className={`border p-[.5rem] rounded-md w-full text-[.9rem] mobilesm:p-2.5 mobilesm:text-base placeholder:text-colorLightGrayViolet focus:outline-none focus:ring ${
                    isCvcValid
                      ? 'focus:ring-colorLinBlue'
                      : 'focus:ring-colorRed'
                  } `}
                  id='cvc'
                  name='cvc'
                  value={cvc}
                  onChange={cvcHandler}
                  pattern='^[1-9][\.\d]*(,\d+)?$'
                  placeholder='e.g 123'
                  maxLength={3}
                />
                {errors?.cvc && <p className='warning'>{errors.cvc}</p>}
              </div>
            </div>
            <button
              type='submit'
              className='bg-colorDarkViolet text-colorLightGrayViolet w-full py-2 rounded-md font-bold mobilesm:text-lg mobilesm:p-2.5 focus:outline-none focus:ring focus:ring-colorLinPurple 
              transition-all duration-500 bg-gradient-to-t to-colorDarkViolet via-colorDarkViolet from-colorLinBlue bg-size-200 bg-pos-0 hover:bg-pos-100'
            >
              Confirm
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default App;
