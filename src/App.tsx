import React, { useState } from 'react';

import Input from '@/components/Input';
import SeparatorButton from '@/components/SeparatorButton';
import AgeCounter from '@/components/AgeCounter';
import { calculateAge } from './utils';

export default function App() {
  const [shouldStartCounter, setShouldStartCounter] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState({ year: 0, month: 0, day: 0 });
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

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
    const { year, month, day } = dateOfBirth;
    const { ageInDays, ageInMonths, ageInYears } = calculateAge(
      `${year}-${month}-${day}`
    );

    // TODO Validation
    setAge({ years: ageInYears, months: ageInMonths, days: ageInDays });
    setShouldStartCounter(true);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-light-grey font-body">
      <section className="flex w-[840px] flex-col rounded-3xl rounded-br-[200px] bg-white p-14">
        <form onSubmit={handleFormSubmit} className="flex gap-8">
          <Input
            id="day"
            name="day"
            placeholder="DD"
            onChange={handleAgeChange}
            value={dateOfBirth.day || ''}
          />
          <Input
            id="month"
            name="month"
            placeholder="MM"
            onChange={handleAgeChange}
            value={dateOfBirth.month || ''}
          />
          <Input
            id="year"
            name="year"
            placeholder="YYYY"
            onChange={handleAgeChange}
            value={dateOfBirth.year || ''}
          />
          <input type="submit" className="hidden" />
        </form>
        <SeparatorButton onClick={handleFormSubmit} />
        <AgeCounter
          label="years"
          count={age.years}
          shouldStartCounter={shouldStartCounter}
          resetCounter={() => setShouldStartCounter(false)}
        />
        <AgeCounter
          label="months"
          count={age.months}
          shouldStartCounter={shouldStartCounter}
          resetCounter={() => setShouldStartCounter(false)}
        />
        <AgeCounter
          label="days"
          count={age.days}
          shouldStartCounter={shouldStartCounter}
          resetCounter={() => setShouldStartCounter(false)}
        />
      </section>
    </main>
  );
}
