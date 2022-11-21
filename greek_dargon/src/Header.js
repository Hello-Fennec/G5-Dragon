import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { fontFamily } from '@mui/system';

const drawerWidth = 240;
const navItems = ['MYTHICAL DRAGONS', ' LERNAEAN HYDRA', 'ABOUT US'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ width: 50, fontSize: '30px', my: 2 }}> <Typography variant="h6" >

        <p class="font-['Irish_grover'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-[39px] ">
          <span class=' '>GREEK</span> <br></br>  <span class=''>MYTHOLOGY</span>
        </p>
      </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{ background: '#1958A7' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: '32px', display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}
            align="left"
          >



            <p class="font-['Irish_grover'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-[39px] ">
              <span class='text-[#FFE62F] '>GREEK</span> <br></br>  <span class='text-[#FF26C2] '>MYTHOLOGY</span>
            </p>



          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', fontFamily: 'Irish grover', marginLeft: '50px' }}>
                <Box sx={{ width: 100, fontSize: '25px', lineHeight: 1.3, textAlign: 'center' }}>{item}</Box>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, fontFamily: 'Irish grover',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box >
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,


};

export default DrawerAppBar;