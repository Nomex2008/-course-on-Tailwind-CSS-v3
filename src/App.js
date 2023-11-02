import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>
        Hello world!
      </h1>
      <button className={styles.btn}>
        Click me!
      </button>
    </div>
  );
}

export default App;