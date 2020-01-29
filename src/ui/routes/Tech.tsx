import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { useGlobalState } from '../../hooks/useState/global';

import TransitionedView from '../containers/TransitionedView';

const Tech = () => {
  const { lang } = useGlobalState();

  let l = null;
  let l1 = null;
  let l2 = null;

  let example_github = 'https://github.com/fuzznets/libartificial';

  let t = null;
  let t1 = null;

  if (lang === 'gre') {
    l = 'Γλώσσες προγραμματισμού';
    l1 = 'παράδειγμα ';
    l2 = 'εδώ';

    t = 'Τεχνολογικά προσόντα και ενδιαφέροντα';
    t1 = '- Νευρωνικά Δίκτυα';
  } else {
    l = 'Programming languages';
    l1 = 'example ';
    l2 = 'here';

    t = 'Tech skills and interests';
    t1 = '- Neural Networks';
  }

  return (
    <TransitionedView>
      <Typography variant='h6' color='inherit'>
        {l}
      </Typography>
      <Typography variant='body1' color='inherit'>
        - C ({l1}{' '}
        <Link href={example_github} underline='always' color='textPrimary'>
          {l2}
        </Link>
        )
      </Typography>
      <Typography variant='body1' color='inherit'>
        - Python
      </Typography>
      <Typography variant='body1' color='inherit'>
        - Javascript
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        - R
      </Typography>

      <Typography variant='h6' color='inherit'>
        {t}
      </Typography>

      <Typography variant='body1' color='inherit'>
        {t1} etc.
      </Typography>
    </TransitionedView>
  );
};

export default Tech;
