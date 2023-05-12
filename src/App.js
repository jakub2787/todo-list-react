import { HashRouter, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from './common/Navigation';
import AuthorPage from './features/author/AuthorPage';
import TaskPage from './features/tasks/TaskPage';
import TasksPage from './features/tasks/TasksPage';
import { toAuthor, toTask, toTasks } from './routes';

export const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
); 