import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getTips } from '../Store/tip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const TipsList = (props) => {
    const classes = useStyles();
    const tips = useSelector(getTips);
    return (
      <List className={classes.root}>
          {(tips || []).map((item) => 
              <React.Fragment>
                  <ListItem alignItems="flex-start">
                      <ListItemText
                      primary={item.title}
                      secondary={item.text}
                      />
                  </ListItem>
                  <Divider variant="inset" component="li" />
              </React.Fragment>
          )}
      </List>
    );
}

export default TipsList;