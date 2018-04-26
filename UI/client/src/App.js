import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
	Drawer,
	Divider,
	AppBar,
	MuiThemeProvider,
	createMuiTheme,
	Menu,
	MenuItem,
	Toolbar,
	IconButton,
	Typography,
	Button
} from 'material-ui';
import Login from './containers/login';
import Home from './containers/home';
import ClippedDrawer from './components/ClippedDrawer';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#73e8ff',
			main: '#29b6f6',
			dark: '#0086c3',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000'
		}
	}
});

class App extends Component {
	state = {
		anchor: 'left'
	};

	handleChange = event => {
		this.setState({
			anchor: event.target.value
		});
	};
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div>
					{/*<Drawer open={true} variant="permanent">
						<MenuItem>A</MenuItem>
						<MenuItem>B</MenuItem>
		</Drawer>*/}
					<ClippedDrawer />
					<main>
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/home" component={Home} />
						</Switch>
					</main>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
