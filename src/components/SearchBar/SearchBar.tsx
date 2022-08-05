import { styled, alpha } from '@mui/material/styles'
import { Box, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  border: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
  height: '2.375rem',
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.paper, 0.65),
    borderColor: theme.palette.text.primary,
  },
  '&:focus-within': {
    backgroundColor: alpha(theme.palette.background.paper, 0.65),
    borderColor: theme.palette.primary.contrastText,
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

interface SearchBarProps {
  label: string
  width: number
  onChange: (value: string) => void
}

const SearchBar = ({
  width,
  onChange,
  label,
}: SearchBarProps) => {
  return (
    <Box
      sx={{
        flexGrow: width ? 0 : 1,
        width: width && width,
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={label}
          inputProps={{ 'aria-label': 'search' }}
          // value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Search>
    </Box>
  )
}

export { SearchBar }
