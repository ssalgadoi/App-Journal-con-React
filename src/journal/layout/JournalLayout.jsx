import { Box } from '@mui/system'
import { Navbar, SideBar } from '../components'



const drawerWidth = 340;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex'}}>
            <Navbar drawerWidth={ drawerWidth }/>
            <SideBar drawerWidth={ drawerWidth }/>
            <Box component='main' sx={{ flexGrow: 1, p: 3}}>
                { children }
            </Box>
        </Box>
    )
}
