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

  // Check for if any value is empty
  for (const [date, value] of Object.entries(dateOfBirth)) {
    if (!value) {
      errors = { ...errors, [date]: 'This field is required' };
    }
  }

  return errors;
};

export const hasErrors = (validations: Validations) => {
  return Object.values(validations).some((error) => !!error);
};

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
