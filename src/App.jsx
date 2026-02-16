import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Success from './components/Success'

function App() {
  // Kullanıcının giriş yapıp yapmadığını tutan state
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      {/* Ternary Operator (Üçlü Koşul): 
        isLoggedIn true ise Success sayfasını, değilse Login formunu göster.
      */}
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Success />
      )}
    </div>
  )
}

export default App