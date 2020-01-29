//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import drawerWidth from '../../aux/drawerWidth';

const imgDimentions = 128;

const useOwnAvatarStyle = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: imgDimentions,
      height: imgDimentions,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: (drawerWidth - imgDimentions) / 2,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      borderRadius: '50%',
      borderWidth: 1,
    },
  })
);

export default useOwnAvatarStyle;
