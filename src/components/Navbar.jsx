import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#0F0F0F",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      <Typography p={2} sx={{ color: '#eee', textTransform: 'capitalize', fontWeight: 'bold', fontSize: 20 }}>
      Streamlix
      </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
