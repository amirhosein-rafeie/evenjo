import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  MenuItem,
  Select,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import TWButton from "../components/TWButton"
import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";

export default function NavBar() {
  const [country, setCountry] = useState("Eng");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => setOpen(state);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Shows", to: "/shows" },
    { name: "Concerts", to: "/concerts" },
    { name: "Sports", to: "/sports" },
    { name: "Festivals", to: "/festivals" },
  ];

  return (
    <nav>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "rgba(80, 80, 80, 0.07)",
          boxShadow: "none",
          fontFamily: "Inter, sans-serif",
          display: "flex",
        }}
      >
        <Toolbar className=" flex items-center justify-between w-full">
          <div className="font-normal text-(--color-primaryMain) font-lobster text-4xl flex-none">
            <Link to="/" className="opacity-100 hover:opacity-100 transition-opacity">
              Evenjo
            </Link>
          </div>

          <div className="hidden md:flex flex-grow justify-center items-center gap-8 text-white text-base font-inter">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="opacity-100 hover:opacity-100 transition-opacity"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              variant="standard"
              disableUnderline
              sx={{
                color: "white",
                fontFamily: "Inter, sans-serif",
                "& .MuiSelect-icon": { color: "white" },
              }}
            >
              <MenuItem value="Eng">
                <div className="flex items-center gap-1">
                  <img src={flag1} alt="Eng" style={{ height: "10px" }} />
                  Eng
                </div>
              </MenuItem>
              <MenuItem value="Ir">
                <div className="flex items-center gap-1">
                  <img src={flag2} alt="Ir" style={{ height: "10px" }} />
                  Ir
                </div>
              </MenuItem>
            </Select>
            <TWButton onClick={() => navigate("/signup")}>signup</TWButton>
          </div>

          <div className="flex md:hidden">
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div
          className="flex flex-col h-full bg-gray-900 text-white p-6"
          style={{ width: "70vw" }}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-lobster">Evenjo</span>
            <button onClick={toggleDrawer(false)} className="text-xl">
              ✕
            </button>
          </div>

          <List className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <ListItemButton
                key={item.to}
                onClick={() => {
                  navigate(item.to);
                  setOpen(false);
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </List>

          <div className="flex flex-col gap-4 mt-6">
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              variant="standard"
              disableUnderline
              sx={{
                color: "white",
                "& .MuiSelect-icon": { color: "white" },
              }}
            >
              <MenuItem value="Eng">
                <div className="flex items-center gap-1">
                  <img src={flag1} alt="Eng" style={{ height: "10px" }} />
                  Eng
                </div>
              </MenuItem>
              <MenuItem value="Ir">
                <div className="flex items-center gap-1">
                  <img src={flag2} alt="Ir" style={{ height: "10px" }} />
                  Ir
                </div>
              </MenuItem>
            </Select>

            <TWButton onClick={() => navigate("/signup")}>signup</TWButton>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
