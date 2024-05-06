import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

function Home () {
    return (
        <>
        <nav>
            <ul>
                <li> <Link to = {'/'}>Home </Link></li>
                <li> <Link to = {'/profile/Jane'}>Profile</Link></li>
                <li> <Link to = {'/dashboard'}>Dashboard </Link> </li>
            </ul>
        </nav>

        <h1>Home</h1>
        </>
    )
}

function Profile () {

    const {name} = useParams();
    return (
        <>
        <h1>Hello ! My name is {name}. This is My Profile.</h1>
        </>
    )
}

function Settings () {
    return (
        <>
        <h1>Settings</h1>
        </>
    )
}

function About () {
    return (
        <>
        <h1>About</h1>
        </>
    )
}

function Dashboard () {
    return (
        <>
        <h1>This is my Dashboard</h1>

        <div>
            <ul>
                <li><Link to = {'/dashboard/settings'}>Settings</Link></li>
                <li><Link to = {'/dashboard/about'}>About</Link></li>
            </ul>

            <Routes>
                <Route path={'/settings'} exact element = {<Settings/>}/>
                <Route path={'/about'} exact element = {<About/>}/>
            </Routes>
        </div>
        </>
    )
}

function Routing () {
    return (
        <>
        <Router>


            <Routes>
                <Route exact path={'/'}  element= {<Home/>} />
                <Route exact path= {"/profile/:name"} element = {<Profile/>}/>
                <Route exact path = {'/dashboard/*'} element = {<Dashboard/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default Routing;