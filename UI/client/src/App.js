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
	Button,
	withStyles
} from 'material-ui';
import Login from './containers/login';
import Home from './containers/home';
import ClippedDrawer from './components/ClippedDrawer';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#BBDEFB',
			main: '#2196F3',
			dark: '#82B1FF',
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

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: 430,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0 // So the Typography noWrap works
	},
	toolbar: theme.mixins.toolbar
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
		const { classes } = this.props;

		return (
			<MuiThemeProvider theme={theme}>
				<div className={classes.root}>
					<ClippedDrawer />
					<main classes={classes.content}>
						<div className={classes.toolbar} />
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

export default withStyles(styles)(App);
