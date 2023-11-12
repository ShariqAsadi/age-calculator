import IconArrow from '@/assets/images/icon-arrow.svg'

export default function Separator() {
  return (
    <div className="flex items-center">
      <div className="h-[1px] flex-1 bg-light-grey"></div>
      <button className="flex h-24 w-24 items-center justify-center rounded-full bg-purple">
        <img src={IconArrow} alt="arrow icon" />
      </button>
    </div>
  )
}
