import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import userData from './assets/user.json';
import statsData from './assets/data.json';
import friendsData from './assets/friends.json';
import transactionData from './assets/transactions.json';

import Profile from './components/Profile';
import Statistics from './components/Statistics.jsx';
import FriendList from './components/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>

      <Profile userData={userData} />
      <Statistics statsData={statsData}/>
      <FriendList friendsData={friendsData}/>
      <TransactionHistory transactionData={transactionData}/>
      
    </>
  )
}

export default App