import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
	Drawer,
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

const styles = {
	root: {
		flexGrow: 1,
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Drawer open={true} variant="permanent">
					<AppBar title="RateMyDebate" >
						<Menu open={false}>
							<MenuItem>
								A{' '}
							</MenuItem>
						</Menu>
					</AppBar>
				</Drawer>
				<main>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/home" component={Home} />
					</Switch>
				</main>
			</MuiThemeProvider>
		);
	}
}

export default App;
