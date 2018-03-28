import React from "react";
import List,{ListItem,ListItemText,ListItemIcon} from "material-ui/List";
import Drawer from "material-ui/Drawer";

function AppDrawer(){
    return(
        <div>
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

            </div>
    )
        
}

export default AppDrawer;

