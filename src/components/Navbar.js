import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (open)=>() => {
        setOpenMenu(open);
    };
    const pages = ['About Us', 'Courses', 'Teachers', 'Contact']

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleMenu(false)}
        >
            <List>
                {pages.map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position='static' sx={{ bgcolor: "white" }}>
                <Toolbar>
                    <IconButton>
                    <LocalLibraryIcon/>
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, color: 'black' }}
                    >
                        Coaching Classes
                    </Typography>
                    <Box
                        direction='row'
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        {pages.map((page)=>(
                            <Button sx={{ color: 'black' }}>{page}</Button>
                        ))}
                    </Box>
                    <IconButton
                        size='large'
                        edge='end'
                        sx={{ display: { xs: 'flex', md: 'none' }, color: 'black', marginLeft: 'auto' }}
                        onClick={toggleMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='top'
                sx={{ display: { xs: 'flex', md: 'none' }}}
                open={openMenu}
                onClose={toggleMenu(false)}
            >
                {list}
            </Drawer>
        </>
    );
}

export default Navbar;
