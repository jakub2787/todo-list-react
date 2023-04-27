import Tasks from './features/tasks/TasksPage';
import { HashRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AuthorPage from './features/author';
export const App = () => (
    <HashRouter>    
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Zadania</NavLink>
                </li>
                <li>
                    <NavLink to="./autor">O autorze</NavLink>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/zadania">
                <Tasks />
            </Route>
            <Route>
                <Redirect to="/zadania"></Redirect>
            </Route>
        </Switch>
    </HashRouter>
); 