import React from "react";
import { Grid, Typography, Box, useMediaQuery, List } from "@mui/material";
import Image from "next/image";
import G4NavbarLight from '../../assets/images/navbar-light.svg'
import mainLogo from "../../assets/images/main-page-logo.png";
import { Link } from "../Link/Link";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        minHeight: "600px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1300px",
          padding: isMobile ? "2px" : "1rem",
        }}
      >
        <Grid item xs={12} md={4}>
          <Image
            src={mainLogo}
            alt="G4"
            style={{
              width: "100%",
            }}
          />
          <Typography variant="h6" color="textPrimary">
            A evolução da escola de negócios.
          </Typography>
          <Box mt={4}>
            <Typography variant="h5" color="textPrimary">
              Trabalhamos todos os dias para gerar mais de 1.000.000 de empregos até 2030.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "100px",
              width: '200px',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '4rem',
              marginRight: isMobile ? '0' : '16rem',
            }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              fontSize={isMobile ? "32px" : "28px"}
              sx={{
                color: "primary.contrastText",
                textAlign: 'center',
              }}
            >
              Work here.
            </Typography>

          </Box>
          <Box>
            <List>
              <Link
                href="https://www.instagram.com/g4educacao/"
                variant="h6"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <InstagramIcon />
                <Typography variant="h6" color="textPrimary">
                  Instagram
                </Typography>
              </Link>
              <Link
                href="https://www.linkedin.com/school/g4educacao/mycompany/"
                variant="h6"
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <LinkedInIcon />
                <Typography variant="h6" color="textPrimary">
                  LinkedIn
                </Typography>
              </Link>
              <Link
                href="https://www.youtube.com/c/Gest%C3%A3o40"
                variant="h6"
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <YouTubeIcon />
                <Typography variant="h6" color="textPrimary">
                  Youtube
                </Typography>

              </Link>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
};

export { Hero };
