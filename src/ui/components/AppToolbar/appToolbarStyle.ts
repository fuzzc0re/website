import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import drawerWidth from '../../aux/drawerWidth';

const useAppToolbarStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      padding: theme.spacing(0.4),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    flagButton: {
      width: '2.5em',
    },
  })
);

export default useAppToolbarStyle;
