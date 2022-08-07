import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import G4NavbarLight from '../../assets/images/navbar-light.svg'

import { useState } from 'react';
import { useRouter } from 'next/router';

const pages = ['Área do Recrutador'];

const UnderlineActivePageIndicator = ({ page }) => {
  const translatePage = (page) => {
    switch (page) {
      case 'Área do Recrutador':
        return 'recruiter';
      case 'Sobre':
        return 'sobre';
      default:
        break;
    }
  }
  const path = translatePage(page);
  const { pathname } = useRouter();
  const isActive = pathname.includes(path);
  return (
    <Box
      sx={{
        width: '100%',
        height: '10%',
        backgroundColor: isActive ? 'primary.main' : 'transparent',
        borderRadius: '4px',
        position: 'relative',
      }}
    >
    </Box>
  )
}

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (title: string) => {
    const route = title.toLowerCase();
    switch (route) {
      case 'área do recrutador':
        router.push('/recruiter');
        break;
      default:
        break;
    }
  }

  return (
    <AppBar
      sx={{
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="xl" sx={{ backgroundColor: 'background.paper' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >


            <G4NavbarLight />

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigation(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >

            <G4NavbarLight />

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{ my: 2, color: 'text.primary', display: 'block', textTransform: 'none' }}
              >
                {page}
                <UnderlineActivePageIndicator page={page} />
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row' }}>
            <Typography textAlign="center" variant='subtitle2'>Sair</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { NavBar };
