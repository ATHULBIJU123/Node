import Navigation from './Components/client/LandingPage/Navigation'
import Container from './Components/client/LandingPage/Container'
import SignIn from './Components/client/SignInPage/SignIn'
import './App.css'

function App() {
  return (
    <>
    <Navigation/>
    <Container/>
    <SignIn onClick = {SignIn}/>
    </>
  )
}

export default App;
