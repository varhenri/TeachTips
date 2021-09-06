import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddTipsModal from './AddTips/AddTipsModal';
import TipsList from './TipsList';
import { getTipsData, changeSearchParam, changeCategorySearchParam } from '../Store/tip';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCategoriesForReactSelect } from '../Store/category';

import Select from 'react-select';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  chipsWrapper: {
    margin: '0px 0px',
  },
  chipStyle: {
    margin: '3px'
  }
});

const TipsContent = (props) => {
  const dispatch = useDispatch();
  const reactSelectCategories = useSelector(getCategoriesForReactSelect);

  const handleSearchTextChange = (e) => {
    dispatch(changeSearchParam(e.target.value));
  }

  const handleSearchCategoryChange = (value) => {
    dispatch(changeCategorySearchParam(value));
  }

  const handleRefresh = () => {
    dispatch(getTipsData());
  }

  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Filter by title or text"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                onChange={handleSearchTextChange}
              />
            </Grid>
            <Grid item xs>
              <Select
                  isMulti
                  onChange={handleSearchCategoryChange}
                  options={reactSelectCategories}
                  className={"basic-multi-select " + classes.select}
                  classNamePrefix="select"
                  placeholder="Filter by categories"
              />
            </Grid>
            <Grid item>
              <AddTipsModal />
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} onClick={handleRefresh} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          <TipsList/>
        </Typography>
      </div>
    </Paper>
  );
}

TipsContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TipsContent);
