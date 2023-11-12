import IconArrow from '@/assets/images/icon-arrow.svg';

interface SeparatorButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function SeparatorButton({ onClick }: SeparatorButtonProps) {
  return (
    <div className="flex items-center">
      <div className="h-[1px] flex-1 bg-light-grey"></div>
      <button
        type="submit"
        onClick={onClick}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-purple"
      >
        <img src={IconArrow} alt="arrow icon" />
      </button>
    </div>
  );
}
