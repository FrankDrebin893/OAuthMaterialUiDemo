import React, { Component } from 'react';
import {
	AppBar,
	Drawer,
	Toolbar,
	Typography,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	withStyles
} from 'material-ui';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import BackupIcon from '@material-ui/icons/Backup';
import { Link } from 'react-router-dom';

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

class ClippedDrawer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			classes: props
		};
	}
	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar position="absolute" className={classes.appBar}>
					<Toolbar>
						<Typography variant="title" color="inherit" noWrap>
							Rate My Debate
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.toolbar} />
					<List>
						<Link to="/home">
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText>
									Home
								</ListItemText>
							</ListItem>
						</Link>
						<Link to="/">
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText>
									Login
								</ListItemText>
							</ListItem>
						</Link>
						<ListItem button>
							<ListItemIcon>
								<BackupIcon />
							</ListItemIcon>
							<ListItemText>
								Files
							</ListItemText>
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText>
								Analysis
							</ListItemText>
						</ListItem>
					</List>
					<Divider />
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(ClippedDrawer);
