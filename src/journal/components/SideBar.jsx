import { TurnedInNot } from '@mui/icons-material'
import {
    Box,
    Drawer,
    Typography,
    Toolbar,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Chipy
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {['Enero', 'Febrero', 'Marzo', 'Abril'].map((mes) => (
                        <ListItem key={mes} disablePadding>
                            <ListItemButton>
                                {/* Icono separado */}
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>

                                {/* Texto principal y secundario */}
                                <ListItemText
                                    primary={mes}
                                    secondary='Esta es una línea de prueba para esta app'
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}
