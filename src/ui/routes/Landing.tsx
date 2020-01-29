import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';

import { useGlobalState } from '../../hooks/useState/global';

import TransitionedView from '../containers/TransitionedView';

const Landing = () => {
  const { lang } = useGlobalState();
  let words = null;
  if (lang === 'gre') {
    words = 'Καλησπέρα και καλωσήρθατε στην ιστοσελίδα μου!';
  } else {
    words = 'Hello and welcome to my website!';
  }

  const [change, setChange] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, 3000);
  }, [setChange]);

  let component = null;
  if (change) {
    component = <Redirect to='/about' />;
  } else {
    component = (
      <Typography paragraph variant='body1' color='inherit'>
        {words}
      </Typography>
    );
  }

  return <TransitionedView>{component}</TransitionedView>;
};

export default Landing;
