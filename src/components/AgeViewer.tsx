import AgeCounter from './AgeCounter';

interface Age {
  days: number;
  months: number;
  years: number;
}

interface AgeViewerProps {
  shouldStartCounter: boolean;
  setShouldStartCounter: (shouldStartCounter: boolean) => void;
  age: Age;
}

export default function AgeViewer({
  setShouldStartCounter,
  shouldStartCounter,
  age
}: AgeViewerProps) {
  return (
    <>
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
    </>
  );
}
