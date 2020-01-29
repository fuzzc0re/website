import React from 'react';
import Typography from '@material-ui/core/Typography';

import TransitionedView from '../containers/TransitionedView';

import { useGlobalState } from '../../hooks/useState/global';

const Academic = () => {
  const { lang } = useGlobalState();

  let phd = null;
  let phd1 = null;
  let phd2 = null;
  let phd3 = null;

  let msc = null;
  let msc1 = null;
  let msc2 = null;
  let msc3 = null;

  let bsc = null;
  let bsc1 = null;
  let bsc2 = null;
  let bsc3 = null;

  if (lang === 'gre') {
    phd = 'Διδακτορικό Δίπλωμα στη [Τομέας]';
    phd1 = '[Πανεπιστήμιο] ([Χρονιές])';
    phd2 = 'Τίτλος Διατριβής: [Τίτλος]';
    phd3 = 'Επιβλέπουσα: [Όνομα]';

    msc = 'Μεταπτυχιακό Δίπλωμα στη [Τομέας]';
    msc1 = '[Πανεπιστήμιο] ([Χρονιές])';
    msc2 = 'Τίτλος Διπλωματικής: [Τίτλος]';
    msc3 = 'Επιβλέποντας: [Όνομα]';

    bsc = 'Πτυχίο (BSc) στη [Τομέας]';
    bsc1 = '[Πανεπιστήμιο] ([Χρονιές])';
    bsc2 = 'Τίτλος Πτυχιακής: [Τίτλος]';
    bsc3 = 'Επιβλέπουσα: [Όνομα]';
  } else {
    phd = 'PhD in [Field]';
    phd1 = '[Institution Name] ([Years])';
    phd2 = 'Thesis Title: [Title]';
    phd3 = 'Supervisor: [Name]';

    msc = 'MSc in [Field]';
    msc1 = '[Institution Name] ([Years])';
    msc2 = 'Thesis Title: [Title]';
    msc3 = 'Supervisor: [Name]';

    bsc = 'BSc in [Field]';
    bsc1 = '[Institution Name] ([Years])';
    bsc2 = 'Thesis Title: [Title]';
    bsc3 = 'Supervisor: [Name]';
  }

  return (
    <TransitionedView>
      <Typography variant='h6' color='inherit'>
        {phd}
      </Typography>
      <Typography variant='body1' color='inherit'>
        {phd1}
      </Typography>
      <Typography variant='body1' color='inherit'>
        {phd2}{' '}
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        {phd3}
      </Typography>

      <Typography variant='h6' color='inherit'>
        {msc}
      </Typography>
      <Typography variant='body1' color='inherit'>
        {msc1}
      </Typography>
      <Typography variant='body1' color='inherit'>
        {msc2}{' '}
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        {msc3}
      </Typography>

      <Typography variant='h6' color='inherit'>
        {bsc}
      </Typography>
      <Typography variant='body1' color='inherit'>
        {bsc1}
      </Typography>
      <Typography variant='body1' color='inherit'>
        {bsc2}{' '}
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        {bsc3}
      </Typography>
    </TransitionedView>
  );
};

export default Academic;
