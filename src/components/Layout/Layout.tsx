import { Box, Toolbar } from "@mui/material";
import { NavBar } from "../NavBar";

const LayoutProvider = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '0.1em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid grey'
          }
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export { LayoutProvider }
