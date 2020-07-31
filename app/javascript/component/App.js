import React from 'react';
import './app.css'
import { Route, Switch } from 'react-router-dom';
import Airlines from './airlines/Airlines';
import Airline from './airline/Airline';

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Airlines} />
			<Route exact path="/airlines/:slug" component={Airline} />
		</Switch>
	)

}

export default App;