
import React, { Component} from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import AppList from "./AppList"
import Button from 'material-ui/Button';
//样式
const drawerWidth=240;
const styles=theme=>({
  root: {
    flexGrow: 1,
    height:"100%",
    zIndex:1,
    position: 'relative',
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#009688",
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    marginLeft: 0,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends  Component{
  constructor(props){
    super(props);
    this.state={
      open:false,
      mouse:true,
      anchorEl: null,
    }
//点击事件函数绑定
    this.handleOnclick=this.handleOnclick.bind(this);
    this.handleEnter=this.handleEnter.bind(this);
    this.handleMenu=this.handleMenu.bind(this);
  }

// 点击事件
  handleOnclick(){
      var open=this.state.open;
      this.setState({open:!open});
  }
  handleEnter=event=>{
    if(this.state.mouse===true){
    var mouse=this.state.mouse;
    //var login=this.state.login;
    //login=login==='login'? 'loginout':'login';
    this.setState({mouse:!mouse  ,anchorEl: event.currentTarget});
    }
  }
  handleMenu(){
    var mouse=this.state.mouse;
    this.setState({mouse:!mouse});
  }

  render(){
    const classes=this.props.classes;
    return (
    <div className={classes.root} >                   
       <AppBar  className={classes.appBar}  >
          <Toolbar>
            <IconButton 
             onClick={this.handleOnclick} color="inherit">
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit"  className={classes.flex}>Title</Typography>
            {/* -----登录---- */}
            <Button color="inherit">登 录</Button>
          </Toolbar>
       </AppBar>
       {/* -------Drawer------ */}
             <Drawer   variant="persistent"
              open={this.state.open}
              classes={{paper:classes.drawerPaper}}>
               <IconButton  onClick={this.handleOnclick}>
                 <MenuIcon/>
               </IconButton>
               {/* ----list----- */}
               <AppList/>
             </Drawer>
           {/* -------main--------- */}
             <main  className={classNames(classes.content, classes[`content-left`], 
             {[classes[`contentShift-left`]]: this.state.open})}>
             <div className={classes.drawerHeader}  />
             <Typography noWrap>qwertyuioop</Typography>
             </main>
    </div>
    )
  }
} 


export default withStyles(styles)(App);