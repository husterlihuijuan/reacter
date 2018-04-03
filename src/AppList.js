import React from "react";
import List,{ListItem,ListItemText} from "material-ui/List";
import {withStyles} from "material-ui/styles";

const styles={
    list:{
        
    }

}

class AppList extends React.Component{
    
    render(){
        return(
            <List >
            <ListItem button>
                <ListItemText primary="功能一"/>
            </ListItem>
            <ListItem button>

                <ListItemText primary="功能二"/>
            </ListItem>

             <ListItem button>
                <ListItemText primary="功能三"/>
            </ListItem>
        </List>
        );
    }
}

export default withStyles(styles)(AppList);

