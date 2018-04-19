import React from 'react';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import {FormGroup,FormControlLabel} from 'material-ui/Form';
const styles = theme => ({
    input:{
      width:"200px",
      height:"30px"
    },
    input_name:{
      textAlign:"center",
      marginBottom:"5px",
      position:"relative",
    },
    input_password:{
      textAlign:"center",
      position:"relative"
    },
    func:{
      textDecoration:"none",
      fontSize:"10px",
      marginLeft:"10px",
      position:"absolute",
      top:"10px",
    },
    form_checkbox:{
      textAlign:"center",
      display:"block",
      
    },
    button:{
      // marginLeft: theme.spacing.unit,
      // marginRight: theme.spacing.unit,
      display:"block",
      backgroundColor:"#009688",
      color:"#fff",
      width:"200px",
      margin:"auto",
    },
    
});

class LoginForm extends React.Component {
  state = {
  
  };
  render() {
    const { classes } = this.props;

    return (
            <form noValidate autoComplete="off">
                <div className={classes.input_name}>
                    <input type="text" placeholder="name" id="name" className={classes.input}/>
                   <a href="javascript:;"  className={classes.func}>注册账号</a>
                </div>
                <div className={classes.input_password}>
                    <input type="password" placeholder='password' className={classes.input}/>
                    <a href="javascript:;" className={classes.func}>找回密码</a>
                </div>
                
                <FormGroup row className={classes.form_checkbox}>
                    <FormControlLabel control={
                        <Checkbox/>
                      }
                      label="记住密码"
                    />
                    <FormControlLabel style={{marginRight:"-5px",}}
                      control={
                        <Checkbox/>
                      }
                      label="自动登录"
                    />
                </FormGroup>
                       
          
                <Button variant="raised"  className={classes.button}>
                    登 录
                </Button>
           </form>

    );
  }
}
export default withStyles(styles)(LoginForm);


