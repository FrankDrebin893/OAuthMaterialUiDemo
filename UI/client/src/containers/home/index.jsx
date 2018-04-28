import React from 'react';
import { connect } from 'react-redux';
import { Toolbar, Menu, MenuItem, Popover, Typography } from 'material-ui';

const homePage = props => {
	return (
		<div>
			<Typography noWrap>
				You think water moves fast? You should see ice.
			</Typography>
		</div>
	);
};

export default connect()(homePage);
