import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import TransitionedView from '../containers/TransitionedView';
import { useGlobalState } from '../../hooks/useState/global';

const Email = () => {
  const { lang } = useGlobalState();

  let ty = null;
  let preemail = null;
  let email = 'mail@mail.com';
  let emaillink = `mailto:${email}`;

  if (lang === 'gre') {
    ty = 'Ευχαριστώ πολύ για το ενδιαφέρον!';
    preemail = 'Μπορείτε να επικοινωνήσετε μαζί μου στο ';
  } else {
    ty = 'Thank you for your interest!';
    preemail = 'My email address is ';
  }

  return (
    <TransitionedView>
      <Typography paragraph variant='body1' color='inherit'>
        {ty}
      </Typography>
      <Typography paragraph variant='body1' color='inherit'>
        {preemail}{' '}
        <Link underline='always' color='textPrimary' href={emaillink}>
          {email}
        </Link>
        .
      </Typography>
    </TransitionedView>
  );
};

export default Email;
