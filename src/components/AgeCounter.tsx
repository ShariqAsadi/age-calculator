import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';

interface AgeCounterProps {
  count: number;
  label: string;
  shouldStartCounter: boolean;
  resetCounter: () => void;
}

export default function AgeCounter({
  count,
  label,
  shouldStartCounter,
  resetCounter
}: AgeCounterProps) {
  const countUpRef = useRef(null);
  const { start } = useCountUp({
    start: 0,
    ref: countUpRef,
    end: count,
    startOnMount: false
  });

  useEffect(() => {
    if (shouldStartCounter) {
      start();
      resetCounter();
    }
  }, [shouldStartCounter, resetCounter, start]);

  return (
    <div className="flex gap-2 text-[56px] sm:text-[104px] font-extrabold italic leading-[61.6px] sm:leading-[114.4px] tracking-[-1.12px] sm:tracking-[-2.08px]">
      <p className="tabular-nums text-purple" ref={countUpRef}>
        {count || '- -'}
      </p>
      <p className="text-off-black">{label}</p>
    </div>
  );
}
