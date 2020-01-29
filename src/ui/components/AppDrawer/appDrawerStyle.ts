import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import drawerWidth from '../../aux/drawerWidth';

const useAppDrawerStyle = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth + 8,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth + 8,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
      textAlign: 'center',
      scrollbarWidth: 'none',
    },
  })
);

export default useAppDrawerStyle;
