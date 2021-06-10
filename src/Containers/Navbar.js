import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Updates from './Updates';
import Where from './Where';
import MainPage from './MainPage';
import NoticeBoard from './NoticeBoard';

const NavBar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/where">Where</Link>
                        </li>
                        <li>
                            <Link to="/updates">Updates</Link>
                        </li>
                        <li>
                            <Link to="/noticeboard">Notice Board</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/noticeboard">
                        <NoticeBoard />
                    </Route>
                    <Route path="/where">
                        <Where />
                    </Route>
                    <Route path="/updates">
                        <Updates />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default NavBar;
