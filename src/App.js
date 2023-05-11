import { HashRouter, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from './common/Navigation';
import AuthorPage from './features/author';
import TaskPage from './features/tasks/TaskPage';
import TasksPage from './features/tasks/TasksPage';

export const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route>
                <Redirect to="/zadania"></Redirect>
            </Route>
        </Switch>
    </HashRouter>
); 