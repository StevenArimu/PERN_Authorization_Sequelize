import React from "react";
import HomeHeader from "./components/HomeHeader";
import { styled } from "@mui/system";

const MyStyledComponent = styled("div")({
  // Your styles here
  backgroundColor: "lightblue",
  padding: "10px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "lightcyan",
  },
  minHeight: "100vh",
});

export const Home = () => {
  return (
    <MyStyledComponent>
      <HomeHeader />
      <h1>Home</h1>
    </MyStyledComponent>
  );
};
