import { useState } from 'react'
// import Container from './Components/Container'
// import Display from './Components/Display'
import './App.css'

function App() {
  return (
    <>
    {/* <Display/>
    <Container/> */}
      <nav>
        <div class="navmain">
          <ul class="items">
            <li><button>About</button></li>
            <li><button>Login</button></li>
            <li><button>Sign In</button></li>
            <li><button>Support</button></li>
          </ul>
        </div>
      </nav>
    <h1 className="welcome">
      WELCOME..
    </h1>
    </>
  )
}

export default App
