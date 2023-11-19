import React, { useState } from 'react';

import SeparatorButton from '@/components/SeparatorButton';
import { calculateAge, validateErrors, hasErrors } from '@/utils';
import AgeViewer from './components/AgeViewer';
import AgeInput from './components/AgeInput';

export default function App() {
  const [shouldStartCounter, setShouldStartCounter] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState({ year: 0, month: 0, day: 0 });
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [errors, setErrors] = useState({
    year: '',
    month: '',
    day: ''
  });

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth({
      ...dateOfBirth,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const validations = validateErrors(dateOfBirth);
    if (!hasErrors(validations)) {
      const { year, month, day } = dateOfBirth;
      const { ageInDays, ageInMonths, ageInYears } = calculateAge(
        `${year}-${month}-${day}`
      );
      setAge({ years: ageInYears, months: ageInMonths, days: ageInDays });
      setShouldStartCounter(true);
      setErrors({ year: '', month: '', day: '' });
    } else {
      setErrors(validations);
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-light-grey font-body">
      <section className="flex w-[840px] flex-col rounded-3xl rounded-br-[200px] bg-white p-14">
        <form onSubmit={handleFormSubmit} className="flex gap-8">
          <AgeInput
            dateOfBirth={dateOfBirth}
            errors={errors}
            handleAgeChange={handleAgeChange}
          />
          <input type="submit" className="hidden" />
        </form>
        <SeparatorButton onClick={handleFormSubmit} />
        <AgeViewer
          shouldStartCounter={shouldStartCounter}
          age={age}
          setShouldStartCounter={setShouldStartCounter}
        />
      </section>
    </main>
  );
}
