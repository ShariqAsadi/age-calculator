interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <div role="group" className="flex flex-col gap-2">
      <label
        htmlFor={props.id}
        className="text-sm font-bold uppercase leading-normal tracking-[3.5px] text-smokey-grey"
      >
        {props.name}
      </label>
      <input
        {...props}
        className="max-w-[160px] rounded-lg border border-solid border-light-grey px-6 py-3 text-[32px] font-bold tracking-[0.32px] text-off-black  focus:border focus:border-purple focus:caret-purple focus-visible:border focus-visible:border-purple focus-visible:caret-purple focus-visible:outline-none"
      />
    </div>
  )
}
