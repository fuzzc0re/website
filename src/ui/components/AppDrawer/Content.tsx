import React, { memo, KeyboardEvent, MouseEvent, FC } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Face from '@material-ui/icons/Face';
import ImportantDevices from '@material-ui/icons/ImportantDevices';
import School from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail';

import { useGlobalState } from '../../../hooks/useState/global';

import useContentStyle from './contentStyle';

interface IContent {
  handleDrawerToggle: (e: KeyboardEvent | MouseEvent) => void;
}

const Content: FC<IContent> = props => {
  const classes = useContentStyle();
  const { handleDrawerToggle } = props;
  const { title, lang } = useGlobalState();

  let about = null;
  let academic = null;
  let tech = null;
  let contact = null;

  if (lang === 'gre') {
    about = 'Για εμένα';
    academic = 'Ακαδημαϊκά';
    tech = 'Τεχνολογία';
    contact = 'Επικοινωνία';
  } else {
    about = 'About me';
    academic = 'Academic';
    tech = 'Tech';
    contact = 'Contact';
  }

  return (
    <List>
      <ListItem
        key={1}
        button
        disableRipple
        selected={title === 'About Me'}
        component={Link}
        to='/about'
        onClick={handleDrawerToggle}
      >
        <ListItemIcon>
          <Face className={classes.listIcon} />
        </ListItemIcon>
        <ListItemText className={classes.listItem}>
          <Typography variant='h6' color='inherit'>
            {about}
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem
        key={2}
        button
        disableRipple
        selected={title === 'Academic Stuff'}
        component={Link}
        to='/academic'
        onClick={handleDrawerToggle}
      >
        <ListItemIcon>
          <School className={classes.listIcon} />
        </ListItemIcon>
        <ListItemText className={classes.listItem}>
          <Typography variant='h6' color='inherit'>
            {academic}
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem
        key={3}
        button
        disableRipple
        selected={title === 'Tech Stuff'}
        component={Link}
        to='/tech'
        onClick={handleDrawerToggle}
      >
        <ListItemIcon>
          <ImportantDevices className={classes.listIcon} />
        </ListItemIcon>
        <ListItemText className={classes.listItem}>
          <Typography variant='h6' color='inherit'>
            {tech}
          </Typography>
        </ListItemText>
      </ListItem>

      <ListItem
        key={4}
        button
        disableRipple
        selected={title === 'Contact Info'}
        component={Link}
        to='/contact'
        onClick={handleDrawerToggle}
      >
        <ListItemIcon>
          <MailIcon className={classes.listIcon} />
        </ListItemIcon>
        <ListItemText className={classes.listItem}>
          <Typography variant='h6' color='inherit'>
            {contact}
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default memo(Content);
