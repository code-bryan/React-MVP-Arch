import { useEffect, useRef, useState } from "react"
import { ExamplePresenter } from "../presenters/example.presenter"

export default function App() {
  const [message, setMessage] = useState<string>('message');
  const ref = useRef<ExamplePresenter>();

  useEffect(() => {
    ref.current = new ExamplePresenter({
      changeMessage: (message) => setMessage(message),
    });
  }, [])

  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => ref.current?.trigger()}>Trigger Presenter</button>
    </>
  )
}