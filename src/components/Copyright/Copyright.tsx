import * as React from 'react'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

const Copyright = () => {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<MuiLink color="inherit" href="https://mui.com/">
				G4 Educação
			</MuiLink>{' '}
			{new Date().getFullYear()}.
		</Typography>
	)
}

export { Copyright }
