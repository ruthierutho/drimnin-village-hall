import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Events from './Events';
import Contact from './Contact';
import MainPage from './MainPage';
import NoticeBoard from '../NoticeBoard/Containers/NoticeBoard';
import Blog from './Blog';

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
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/noticeboard">Notice Board</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/noticeboard">
                        <NoticeBoard />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/events">
                        <Events />
                    </Route>
                    <Route path="/blog">
                        <Blog />
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
