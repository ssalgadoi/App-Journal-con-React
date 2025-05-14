import { TurnedInNot } from "@mui/icons-material"
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"



export const SideBarItem = ({ title = '', body }) => {
    const newTitle = useMemo(() => {
        return title.length > 17
        ? title.substring(0,17) + "..."
        : title;
    }, [ title ])
    return (
        <ListItem disablePadding>
            <ListItemButton>
                {/* Icono separado */}
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                {/* Texto principal y secundario */}
                <ListItemText
                    primary={newTitle}
                    secondary={body}
                />
            </ListItemButton>
        </ListItem>
    )
}
