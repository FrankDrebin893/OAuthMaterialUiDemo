import React from 'react';
import { connect } from 'react-redux';
import { Toolbar, Menu, MenuItem, Popover } from 'material-ui';

const homePage = (props) => {
    return (<div>
        <Toolbar title="Toolbar" >
            <Menu open={false} title="Menu">
                <MenuItem>Hey</MenuItem>
                <MenuItem>You</MenuItem>
            </Menu>
        </Toolbar>
        Home</div>);
}


export default connect()(homePage);