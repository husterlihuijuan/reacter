import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import AppDrawer from './AppDrawer';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  flex:{
      flex:1,

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  menuButton:{
    marginLeft:-12,
    marginRoght:20,
  },
});

class App extends React.Component {
    state={
        open:false,
    }
    handleDrawer=()=>{
        this.setState({
            open:!this.state.open,
        })
    }
    render(){
        const { classes } =this.props;
        return(
            <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" 
            onClick={this.handleDrawer}>
                <MenuIcon/>
            </IconButton>
          <Typography variant="title" color="inherit" noWrap className={classes.flex}>
            Title
          </Typography>
          <Button color="inhert">login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        } } open={this.state.open}
      >
        <div className={classes.toolbar} />
        <AppDrawer/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
      </main>
    </div>
        );

    }
 

    
   
}


export default withStyles(styles)(App);
