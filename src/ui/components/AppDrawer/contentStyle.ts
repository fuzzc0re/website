import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useContentStyle = makeStyles((theme: Theme) =>
  createStyles({
    listIcon: {
      color: theme.palette.primary.main,
    },
    listItem: {
      color: theme.palette.primary.main,
    },
    langSwitcher: {
      marginTop: 0,
    },
    flag: {
      marginLeft: 1,
      width: 23,
      height: 16,
    },
  })
);

export default useContentStyle;
