import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';

interface AgeCounterProps {
  count: number;
  label: string;
  shouldStartCounter: boolean;
}

export default function AgeCounter({
  count,
  label,
  shouldStartCounter
}: AgeCounterProps) {
  const countUpRef = useRef(null);
  const { start } = useCountUp({
    start: 0,
    ref: countUpRef,
    end: count,
    startOnMount: false
  });

  useEffect(() => {
    if (shouldStartCounter) start();
  }, [shouldStartCounter]);

  return (
    <div className="flex gap-2 text-[104px] italic leading-[110%] tracking-[-2.08px] font-extrabold">
      <p className="text-purple tabular-nums" ref={countUpRef}>
        {count || '- -'}
      </p>
      <p className="text-off-black">{label}</p>
    </div>
  );
}
