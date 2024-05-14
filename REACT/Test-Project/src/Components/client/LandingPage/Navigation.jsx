import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import SignIn from "../SignInPage/SignIn";


function Navigation() {
    return (
        <>
            <Router>
                <nav>
                    <div className="navmain">
                        <ul className="items">
                            <li>
                                <button>About</button>
                            </li>
                            <li>
                                <button>Login</button>
                            </li>
                            <li>
                                <button><NavLink to="/signin">Sign In</NavLink></button>
                            </li>
                            <li>
                                <button>Support</button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Routes>
                        <Route path="/signin" exact element= {<SignIn/>}>
                        </Route>
                    </Routes>
                </Switch>

            </Router>
        </>
    )
}

export default Navigation;