import { Dispatch, SetStateAction } from 'react';

export interface ThanksProps {
  setConfirmed: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setCardNumber: Dispatch<SetStateAction<string>>;
  setCvc: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
  setMonth: Dispatch<SetStateAction<string>>;
}
