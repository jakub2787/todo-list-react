import Tasks from './features/tasks/TasksPage';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AuthorPage from './features/author';
import Navigation from './common/Navigation';

export const App = () => (
    <HashRouter>    
        <Navigation />
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