import { useState } from 'react';
import styles from './app.module.scss'

function App() {

  const  [email,setEmail] = useState('')
  const  [password,setPassword] = useState('')
  const  [isOpen,SetIsOpen] = useState(false)

  function consoleCheck() {
    if (true && true) {
      console.log(11)
    }
  }

  return (
    <>
    <div className={styles.parent}>
      <h1 className={styles.title}>
        Hello world!
      </h1>
      <button onClick={consoleCheck} className={styles.btn}>
        Click me!
      </button>
    </div>

    <div className={styles.parent2}>
      <h1 className={styles.title}>
        Hello world!
      </h1>

      <input
      className={styles.input}
      placeholder='Email'
      value={email}
      onChange={e => setEmail(e.target.value)}
      >
      </input>

      <input placeholder='Password'
      className={styles.input}
      value={password}
      onChange={e => setPassword(e.target.value)}
      >
      </input>

      <button onClick={() => SetIsOpen(!isOpen)} className={styles.btn2}>
        Click me!
      </button>
      
      {isOpen && <button className='animate-fade'>TEST</button>}

    </div>
    </>
  );
}

export default App;