import Input from './Input';

interface DateOfBirth {
  day: number;
  month: number;
  year: number;
}

interface DateOfBirthErrors {
  day: string;
  month: string;
  year: string;
}

interface AgeInputProps {
  handleAgeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dateOfBirth: DateOfBirth;
  errors: DateOfBirthErrors;
}

export default function AgeInput({
  dateOfBirth,
  errors,
  handleAgeChange
}: AgeInputProps) {
  return (
    <>
      <Input
        id="day"
        name="day"
        placeholder="DD"
        onChange={handleAgeChange}
        value={dateOfBirth.day || ''}
        error={errors.day}
      />
      <Input
        id="month"
        name="month"
        placeholder="MM"
        onChange={handleAgeChange}
        value={dateOfBirth.month || ''}
        error={errors.month}
      />
      <Input
        id="year"
        name="year"
        placeholder="YYYY"
        onChange={handleAgeChange}
        value={dateOfBirth.year || ''}
        error={errors.year}
      />
    </>
  );
}
