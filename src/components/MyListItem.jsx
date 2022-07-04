import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const MyListItem = (props) => {
    return (
        <ListItem disablePadding>
            <ListItemButton component="a" href={"#"+props.link}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItemButton>
        </ListItem>
    )
}

export default MyListItem