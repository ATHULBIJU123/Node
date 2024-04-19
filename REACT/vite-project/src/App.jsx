import { Fragment } from "react";
import Greeting from "./components/Greeting"
import Greeting1 from "./components/Greeting1";
function App() {


  return (
    <>
    <Greeting name={"Alan"}/>
    <Greeting1 name = {"Mark"} age= {15} />
    </>
  )
}

export default App;
