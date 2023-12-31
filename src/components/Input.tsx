import { cn } from '@/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string;
}

export default function Input(props: InputProps) {
  const { error, ...rest } = props;
  return (
    <div role="group" className="flex flex-col gap-2">
      <label
        htmlFor={props.id}
        className={cn(
          'text-xs sm:text-sm font-bold uppercase leading-normal tracking-[3.5px] text-smokey-grey',
          {
            'text-light-red': error
          }
        )}
      >
        {props.name}
      </label>
      <input
        {...rest}
        className={cn(
          'w-full sm:max-w-[160px] rounded-lg border border-solid border-light-grey px-4 sm:px-6 py-3 text-xl sm:text-[32px] font-bold tracking-[0.2px] sm:tracking-[0.32px] text-off-black focus:border focus:border-purple focus:caret-purple focus-visible:border focus-visible:border-purple focus-visible:caret-purple focus-visible:outline-none',
          {
            'border-light-red focus:border-light-red focus:caret-light-red focus-visible:border-light-red focus-visible:caret-light-red':
              error
          }
        )}
      />
      {error && (
        <p className="text-xs sm:text-sm font-normal italic text-light-red">
          {error}
        </p>
      )}
    </div>
  );
}
