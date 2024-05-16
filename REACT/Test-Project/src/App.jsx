import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Components/client/LandingPage/Navigation'
import Container from './Components/client/LandingPage/Container'
import SignIn from './Components/client/LogInPage/LogIn'
import "./Components/client/LogInPage/LogIn.css"
import './Components/client/UserPage/UserNav'
import UserNav from "./Components/client/UserPage/UserNav";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container />
          <Routes>
            <Route path="/login" exact element={<SignIn />} />
          </Routes>

          <Routes>
            <Route path="/add user" exact element={<UserNav />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
