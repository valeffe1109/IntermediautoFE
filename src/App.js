import React, { Fragment, useEffect } from 'react';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import PrivateRoute from './components/routing/PrivateRoute';
import store from './store';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import adminDashboard from './components/adminDashboard';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import ParcoAuto from './components/ParcoAuto';
import Dettagli from './components/Dettagli';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Fragment>
				<BrowserRouter>
					<Nav />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/AdminLogin" component={AdminLogin} />
						<Route exact path="/ParcoAuto" component={ParcoAuto} />
						<Route exact path="/Dettagli/:id" component={Dettagli} />
						<PrivateRoute exact path="/Admin" component={adminDashboard} />
					</Switch>
				</BrowserRouter>
			</Fragment>
		</Provider>
	);
};

export default App;
