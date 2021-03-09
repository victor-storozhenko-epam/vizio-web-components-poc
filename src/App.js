import { useRef, useEffect, useState } from 'react'
import './App.css'
import './litelements/my-element'
import './litelements/pushbutton-element'

function App() {
  const [btnCounter, setBtnCounter] = useState(0)
  const [name, setName] = useState('')
  const redButtonRef = useRef()

  const clickHandler = () => {
    console.log('RED BUTTON PRESSED!')
    setBtnCounter(btnCounter + 1)
  }

  useEffect(() => {
    let redButton = null

    if (redButtonRef.current) {
      redButtonRef.current.addEventListener('button-press', clickHandler)
      redButton = redButtonRef.current
    }

    return () => {
      if (redButton) {
        redButton.removeEventListener('button-press', clickHandler)
      }
    }
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <div>{`Button has been pressed ${btnCounter} times`}</div>
        <br />
        {/* <input
          style={{
            border: '0',
            borderBottom: 'solid 1px #fff',
            backgroundColor: '#1e1e1e',
            color: '#fff',
          }}
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <hello-element hello='VIZIO' />
        <br />
        <pushbutton-element color='red' ref={redButtonRef} />
      </header>
    </div>
  )
}

export default App
