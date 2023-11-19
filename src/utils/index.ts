import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DateOfBirth {
  year: number;
  month: number;
  day: number;
}

interface Validations {
  year: string;
  month: string;
  day: string;
}

export function calculateAge(dateOfBirth: string) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageInDays = currentDate.getDate() - birthDate.getDate();

  // Adjust age if dateOfBirth hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    ageInYears--;
    ageInMonths += 12;
  }

  // Adjust for months with fewer days
  const daysInBirthMonth = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth() + 1,
    0
  ).getDate();

  if (ageInDays < 0) {
    ageInDays += daysInBirthMonth;
    ageInMonths--;
  }

  return { ageInYears, ageInMonths, ageInDays };
}

export const validateErrors = (dateOfBirth: DateOfBirth) => {
  let errors = {
    year: '',
    month: '',
    day: ''
  };

  const { day, month, year } = dateOfBirth;
  const currentDate = new Date();
  const birthDate = new Date(`${year}-${month}-${day}`);
  const isBirthDateInTheFuture = birthDate > currentDate;
  const daysInAGivenMonth = new Date(
    birthDate.getFullYear(),
    birthDate.getMonth() + 1,
    0
  ).getDate();

  // Check for if any value is empty
  for (const [date, value] of Object.entries(dateOfBirth)) {
    if (!value) {
      errors = { ...errors, [date]: 'This field is required' };
    }

    if (date === 'day' && (value < 1 || value > 31) && !errors.day) {
      errors = { ...errors, day: 'Must be a valid day' };
    }

    if (date === 'month' && (value < 1 || value > 12) && !errors.month) {
      errors = { ...errors, month: 'Must be a valid month' };
    }
  }

  if (isBirthDateInTheFuture) {
    errors = { ...errors, year: 'Must be in the past' };
  }

  if (isNaN(daysInAGivenMonth)) {
    errors = { ...errors, day: 'Must be a valid date' };
  }

  return errors;
};

export const hasErrors = (validations: Validations) => {
  return Object.values(validations).some((error) => !!error);
};

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
