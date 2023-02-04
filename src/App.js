import logo from './logo.svg';
import './App.css';
import { HeaderContainer } from './Header/Header';
import { Main } from './Main/Main';
import styles from './App.module.css'
import Story1Container from './Main/Stories/Story1/Story1';
import { useEffect } from 'react';


const App = () => {
  return <div>
    
    <div className={styles.page}>
      <div className={styles.header}>
        <HeaderContainer />
      </div>

      <div></div>
      <div className={styles.main}>
        <Main />
      </div>
      <div></div>


    </div>
  </div>
}

export default App;
