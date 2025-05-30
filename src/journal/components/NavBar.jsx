import { AppBar,  IconButton, Toolbar, Typography, Box } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth'




export const Navbar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout())
        
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="h6" noWrap component="div">
                        JournalApp
                    </Typography>

                    <IconButton color="error" onClick={ onLogout }>
                        <LogoutOutlined />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
