export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ');
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
