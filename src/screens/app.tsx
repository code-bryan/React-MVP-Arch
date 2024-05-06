import { useMemo, useState } from "react"
import { ExamplePresenter } from "../presenters/example.presenter"

export default function App() {
  const [message, setMessage] = useState<string>('message');

  const presenter = useMemo(() => new ExamplePresenter({
    changeMessage: (message) => setMessage(message),
  }), [])

  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => presenter.trigger()}>Trigger Presenter</button>
    </>
  )
}