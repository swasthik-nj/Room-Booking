import React, { useEffect, useState } from "react";
import "../Navbar/Nav.css";
import { Link, useNavigate } from "react-router-dom";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import supabase from "../../helper/supabaseClient";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [user, setUser] = useState(null);

  const myBookings=()=>{
    navigate('/mybookings')
  }
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);
  return (
    <div>
      <div className="nav-container">
        <div className="nav-sep">
          <div className="logo">
            <h1>Swadhisht</h1>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-bars ${menuOpen ? "active" : ""}`}>
            <Link
              className="nav-links"
              to={"/"}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="nav-links"
              to={"/about"}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="nav-links"
              to={"/book"}
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
            
            <Link
              className="nav-links"
              to={"/contact"}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <React.Fragment>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <img
                        src="./Hotel project/user.svg"
                        alt="user"
                        style={{ paddingLeft: "90px" }}
                        className="nav-links-user"
                      ></img>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar />{" "}
                    {user ? <p>{user.email}</p> : <Link to={"/login"}>Please log in</Link>}
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                  </MenuItem>

                  <MenuItem onClick={myBookings}>
                    <Avatar /> My Bookings
                  </MenuItem>
                  <Divider />

                  <MenuItem onClick={signOut}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
             {!user && (
  <Link
    className="nav-links"
    to={"/signin"}
    onClick={() => setMenuOpen(false)}
  >
    Sign In
  </Link>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
