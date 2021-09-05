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
import { getTips, getIsLoading } from '../Store/tip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const TipsList = (props) => {
    const classes = useStyles();
    const tips = useSelector(getTips);
    const isLoading = useSelector(getIsLoading);

    if(isLoading){
        return null;
    }

    return (
      <List className={classes.root}>
          {(tips || []).map((item) => 
              <React.Fragment>
                  <ListItem button divider>
                      <ListItemText
                      primary={item.tipTitle}
                      secondary={item.tipText}
                      />
                  </ListItem>
              </React.Fragment>
          )}
      </List>
    );
}

export default TipsList;