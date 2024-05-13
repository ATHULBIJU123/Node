import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Navigation from './Components/client/LandingPage/Navigation'
import Container from './Components/client/LandingPage/Container'
import SignIn from './Components/client/SignInPage/SignIn'
import './App.css'

function App() {
  return (
    <>

      <Router>
        <Navigation/>
        <Container/>
        <Routes>
        <Route path="/signin" component={SignIn} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
