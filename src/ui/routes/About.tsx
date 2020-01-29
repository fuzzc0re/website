import React from 'react';
import Typography from '@material-ui/core/Typography';

import { useGlobalState } from '../../hooks/useState/global';

import TransitionedView from '../containers/TransitionedView';

const About = () => {
  const { lang } = useGlobalState();

  let occ = null;
  let occ1 = null;

  let int = null;
  let int1 = null;

  let cr = null;
  let cr1 = null;

  let l = null;
  let l1 = null;

  if (lang === 'gre') {
    occ = 'Γενικά';
    occ1 = '2 με 3 σειρές';

    int = 'Ενδιαφέροντα';
    int1 = '- Με αρίθμηση';

    cr = 'Τόπος διαμονής';
    cr1 = 'Πόλη, Χώρα';

    l = 'Γλώσσες';
    l1 = 'Ελληνικά, Αγγλικά, κλπ';
  } else {
    occ = 'General';
    occ1 = '2 to 3 lines';

    int = 'Interests';
    int1 = '- With bullet points';

    cr = 'Current residence';
    cr1 = 'City, Country';

    l = 'Languages';
    l1 = 'English, etc.';
  }

  return (
    <TransitionedView>
      <Typography variant='h6' color='inherit'>
        {occ}
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        {occ1}{' '}
      </Typography>

      <Typography variant='h6' color='inherit'>
        {int}
      </Typography>
      <Typography variant='body1' color='inherit'>
        {int1}
      </Typography>

      <Typography variant='h6' color='inherit'>
        {cr}
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        {cr1}
      </Typography>

      <Typography variant='h6' color='inherit'>
        {l}
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        {l1}
      </Typography>
    </TransitionedView>
  );
};

export default About;
