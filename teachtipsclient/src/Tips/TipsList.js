import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import { getTips, getIsLoading } from '../Store/tip';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  chipStyle: {
    margin: '3px'
  }
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
                        primary={item.title}
                        secondary={item.text}
                      />
                      {
                          (item.categories || []).map((category) =>
                            <Chip color="green" className={classes.chipStyle} label={category.name} size="small"/>
                          )
                      }
                  </ListItem>
              </React.Fragment>
          )}
      </List>
    );
}

export default TipsList;