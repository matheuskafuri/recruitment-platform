import { CardContent, Typography } from "@mui/material"

interface IndicatorCardProps {
  title: string
  info: string
}

const IndicatorCard = ({ title, info }: IndicatorCardProps) => {
  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
        height: '14rem',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" component="p" fontWeight='bold'>
        {info}
      </Typography>
    </CardContent>
  )
}

export { IndicatorCard }
