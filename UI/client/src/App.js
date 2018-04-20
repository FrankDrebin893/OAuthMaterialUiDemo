import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
					<AppBar title="RateMyDebate">
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="Menu"
							>
							</IconButton>
							<Typography
								variant="title"
								color="inherit"
							>
								Title
							</Typography>
							<Button color="inherit">Login</Button>
						</Toolbar>
					</AppBar>
          <Menu open={false}>
            <MenuItem>
              A{' '}
            </MenuItem>
          </Menu>
				</Drawer>
				<main>
					<Router>
						<Route path="/" component={Login} />
					</Router>
				</main>
			</MuiThemeProvider>
		);
	}
}

export default App;
