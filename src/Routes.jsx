import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
