import Input from 'components/Input/Input'

export default function App() {
  return (
    <main className="h-screen bg-light-grey flex flex-col items-center justify-center font-body">
      <section className="flex flex-col p-14 bg-white rounded-3xl rounded-br-[200px]">
        <div className="flex gap-8">
          <Input id="DD" title="day" placeholder="DD" />
          <Input id="MM" title="month" placeholder="MM" />
          <Input id="YYYY" title="year" placeholder="YYYY" />
        </div>
      </section>
    </main>
  )
}
