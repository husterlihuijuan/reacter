
import React, { Component} from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import List,{ListItem,ListItemText} from "material-ui/List";
import Button from 'material-ui/Button';
import AppList from './AppList';
import LoginForm from './LoginForm';
import Dialog, {DialogActions,DialogContent} from 'material-ui/Dialog';
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
  loginform:{
   position:"absolute",
    display:"block",
    width:"500px",
    height:"362px",
    top:"50%",
    left:"50%",
    marginLeft:"-250px",
   marginTop:"-181px",
    padding:"0px",
  },
  loginheader:{
    height:"100px",
    backgroundColor:"#2196F3",
    margin:0,marginBottom:"10px",
    position:"relative",
  },
  signOutButton:{
    position:"absolute",
    top:0,
    right:0,
    color:"#fff",
    fontSize:"20px",
    margin:"0",
    padding:"0",
    minWidth:"40px",

  },

});

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      open:false,
      mouse:true,
      anchorEl: null,
     list:0,
     login:false,
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
  handleList(event,a){ 
   this.setState({
     list:a,
   });
 
  }
  handleClickLogin=()=>{
    this.setState({login:true});
  }
  handleCloseLogin=()=>{
    this.setState({login:false});
  }
  render(){
    const classes=this.props.classes;
   
    let centre=(
      <h1>content</h1>
    );
    if(this.state.list==1){
      centre=(
       <AppList/>
    );
    }else if(this.state.list==2){
      centre=(
        <h1>list2</h1>
    );
    }else if(this.state.list==3){
      centre=(
        <h1>list3</h1>
    );
    }
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
            <Button color="inherit" onClick={this.handleClickLogin}>登 录</Button>
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
               <List style={{marginTop:'5px'}}>
                  <ListItem button  onClick={(event)=>{this.handleList(event,1)}}>
                      <ListItemText primary="功能一"/>                
                  </ListItem>
                  <ListItem button onClick={(event)=>{this.handleList(event,2)}}>

                      <ListItemText primary="功能二"/>
                  </ListItem>

                  <ListItem button  onClick={(event)=>{this.handleList(event,3)}}>
                      <ListItemText primary="功能三"/>
                  </ListItem>
              </List>
             </Drawer>
           {/* -------main--------- */}
             <main  className={classNames(classes.content, classes[`content-left`], 
             {[classes[`contentShift-left`]]: this.state.open})}>
             <div className={classes.drawerHeader}  />
               {centre}
             </main>
          {/**********登录页面 ***************/}
          <Dialog open={this.state.login} className={classes.loginform}>
              <DialogActions className={classes.loginheader}>
                <Button onClick={this.handleCloseLogin} color="primary" className={classes.signOutButton}>
                  X
                </Button>  
              </DialogActions>
              <DialogContent>
                  <LoginForm className={classes.flex}/>
              </DialogContent>
          </Dialog>
              
    </div>
    )
  }
} 


export default withStyles(styles)(App);