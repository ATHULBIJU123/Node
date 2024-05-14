import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Components/client/LandingPage/Navigation'
import Container from './Components/client/LandingPage/Container'
import SignIn from './Components/client/LogInPage/LogIn'
import "./Components/client/LogInPage/LogIn.css"

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container />
          <Routes>
            <Route path="/login" exact element={<SignIn />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
