import Input from '@/components/Input'
import Separator from '@/components/Separator'
import AgeCounter from './components/AgeCounter'

export default function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-light-grey font-body">
      <section className="flex w-[840px] flex-col rounded-3xl rounded-br-[200px] bg-white p-14">
        <div className="flex gap-8">
          <Input id="DD" label="day" placeholder="DD" />
          <Input id="MM" label="month" placeholder="MM" />
          <Input id="YYYY" label="year" placeholder="YYYY" />
        </div>
        <Separator />
        <AgeCounter label="years" />
        <AgeCounter label="months" />
        <AgeCounter label="days" />
      </section>
    </main>
  )
}
