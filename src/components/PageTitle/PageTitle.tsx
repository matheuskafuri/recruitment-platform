import { Typography } from "@mui/material";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Typography variant="h5"
      sx={{
        fontWeight: "bold",
        mb: 2,
      }}
    >{title}</Typography>
  )
}

export { PageTitle }
