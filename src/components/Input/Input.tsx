interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export default function Input(props: InputProps) {
  return (
    <div role="group" className="flex flex-col gap-2">
      <label
        htmlFor={props.id}
        className="text-sm uppercase text-smokey-grey tracking-[3.5px] font-bold leading-normal"
      >
        {props.title}
      </label>
      <input
        {...props}
        className="max-w-[160px] px-6 py-3 rounded-lg border border-solid border-light-grey text-off-black text-[32px] font-bold tracking-[0.32px]  focus:border-purple focus:caret-purple focus:border focus-visible:border focus-visible:border-purple focus-visible:caret-purple focus-visible:outline-none"
      />
    </div>
  )
}
