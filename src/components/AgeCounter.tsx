interface AgeCounterProps {
  count?: string
  label: string
}

export default function AgeCounter({ count = '- -', label }: AgeCounterProps) {
  return (
    <div className="flex gap-2 text-[104px] italic leading-[110%] tracking-[-2.08px] font-extrabold">
      <p className="text-purple">{count}</p>
      <p className="text-off-black">{label}</p>
    </div>
  )
}
