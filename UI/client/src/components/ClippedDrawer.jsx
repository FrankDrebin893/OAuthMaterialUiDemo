import React, { Component } from 'react';
import { AppBar, Drawer, Toolbar, Typography, List, Divider, ListItem, ListItemIcon, withStyles } from 'material-ui';


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
        }
    }
    
    render() {
        const { classes } = this.props;
		return (
			<div>
				<AppBar position="absolute" className={classes.appBar}>
					<Toolbar>
						<Typography variant="title" color="inherit" noWrap>
							Clipped drawer
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
                        <ListItem button>
                            Analysis    
                        </ListItem>
                    </List>    
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(ClippedDrawer);