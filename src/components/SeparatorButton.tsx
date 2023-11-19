import IconArrow from '@/assets/images/icon-arrow.svg';

interface SeparatorButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function SeparatorButton({ onClick }: SeparatorButtonProps) {
  return (
    <div className="flex items-center">
      <div className="h-[1px] flex-auto bg-light-grey"></div>
      <button
        type="submit"
        onClick={onClick}
        className="flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-purple"
      >
        <img
          src={IconArrow}
          alt="arrow icon"
          className="w-6 h-6 sm:w-11 sm:h-11"
        />
      </button>
      <div className="sm:hidden h-[1px] flex-1 bg-light-grey"></div>
    </div>
  );
}
