//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { useGlobalState } from '../../../hooks/useState/global';

import useAppToolbarStyle from './appToolbarStyle';

import eng from '../../static/flags/gb.svg';
import gre from '../../static/flags/gr.svg';

interface IToolbarProps {
  handleDrawerToggle: (e: React.KeyboardEvent | React.MouseEvent) => void;
}

const AppToolbar: React.FC<IToolbarProps> = props => {
  const classes = useAppToolbarStyle();
  const { lang, setLang } = useGlobalState();

  let name = null;
  if (lang === 'gre') {
    name = '[Όνομα] CV';
  } else {
    name = '[Name] CV';
  }

  const { handleDrawerToggle } = props;

  const handleFlagClick = () => {
    if (lang === 'eng') {
      setLang('gre');
    } else {
      setLang('eng');
    }
  };

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar variant='dense'>
        <IconButton
          aria-label='Open drawer'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' color='inherit' noWrap className={classes.title}>
          {name}
        </Typography>
        <Button
          aria-label='Switch language'
          disableRipple
          disableFocusRipple
          onClick={handleFlagClick}
        >
          <img
            src={lang === 'eng' ? gre : eng}
            alt='Country Flag'
            className={classes.flagButton}
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default memo(AppToolbar);
