import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import AppDrawer from '../components/AppDrawer/AppDrawer';
import AppToolbar from '../components/AppToolbar/AppToolbar';
import Routes from './Routes';

const useAppStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: 50,
    },
  })
);

const App = () => {
  const classes = useAppStyle();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <AppToolbar handleDrawerToggle={handleDrawerToggle} />
      <AppDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <Routes />
      </main>
    </div>
  );
};

export default App;
