import Header from './components/Header/Header'
import LandingScreen from './components/LandingScreen/LandingScreen'
import styles from "./App.module.scss"

const App = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <LandingScreen/>
    </div>
  )
}

export default App