import React, { Component } from 'react';
import { Paper, TextField, Button, CircularProgress } from 'material-ui';

class LoginPage extends Component {
	state = {
		loading: false,
		success: false
	};
	handleSubmit = () => {
		console.log('asda');
		if (!this.state.loading) [this.setState({ loading: true })];
	};
	render() {
		return (
            <form className="centered">
				<TextField defaultValue="" label="Email" type="email" required /><br />
				<TextField defaultValue="" label="Password" type="password" required />
				<br />
				<Button
					variant="raised"
					color="primary"
					disabled={this.state.loading}
					onClick={this.handleSubmit}
				>
					Login
				</Button>
				{this.state.loading && <CircularProgress />}
			</form>
		);
	}
}

export default LoginPage;
