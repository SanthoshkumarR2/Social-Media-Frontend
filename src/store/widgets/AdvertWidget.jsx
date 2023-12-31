import React from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://santhosh-social-media-backend.vercel.app/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>LEO</Typography>
        <Typography color={medium}>Santhosh</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      The film stars Vijay, leading an ensemble cast that includes Trisha, Sanjay Dutt, Arjun Sarja, Priya Anand, Mysskin, Gautham Vasudev Menon and Mansoor Ali Khan.
Budget: est. ₹250–300 crore
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;