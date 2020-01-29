//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import React, { memo, KeyboardEvent, MouseEvent } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import Content from './Content';
import OwnAvatar from './OwnAvatar';

import useAppDrawerStyle from './appDrawerStyle';

interface IDrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle: (e: KeyboardEvent | MouseEvent) => void;
}

const AppDrawer: React.FC<IDrawerProps> = props => {
  const classes = useAppDrawerStyle();
  const { mobileOpen, handleDrawerToggle } = props;

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation='js'>
        <Drawer
          variant='temporary'
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <OwnAvatar />
          <Divider />
          <Content handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='js'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open
        >
          <OwnAvatar />
          <Divider />
          <Content handleDrawerToggle={() => {}} />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default memo(AppDrawer);
