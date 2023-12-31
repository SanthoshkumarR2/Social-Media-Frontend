import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <> 
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="info">
          Sant@Gram
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}

      > <div id="user">
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}> 
        <img src="../assets/Santhosh.png" alt="Sant@gram" id="value"/> <br />
          Welcome to Sant@Gram!
        </Typography>
        </div>
        <Form />
      </Box>
    </Box>
    </>
  );
};

export default LoginPage;