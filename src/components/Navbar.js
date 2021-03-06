import {useContext,useState, React} from "react";
import {useNavigate, Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../assets/70950.png";
import {AuthContext} from "../contexts/AuthContextProvider";
import { logOut } from "../helpers/Firebase";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logOut()
  }

  const navigate = useNavigate();
  const {currentUser}=useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#3c3c3c"}}>
        <Toolbar>
          <Link to={"/Fireblog-App/"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="cw-logo" style={{display:"flex", height:"30px"}}/>
          </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            style={{
              flexGrow: 1,
              fontFamily: "Roboto",
              "& span": {
                fontSize: "1.5rem",
                color: "wheat",
              },
            }}
          >
            ---- <span>{"<Someone's/>"}</span> Blog ----(TEST)
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{fontSize:"30px"}} />
            </IconButton>
            {currentUser?.email ? (<Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
            <Link to="/Fireblog-App/profile" style={{textDecoration:"none", color: "black"}}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <Link to="/Fireblog-App/newblog" style={{textDecoration:"none", color: "black"}}>
            <MenuItem onClick={handleClose}>New</MenuItem>
            </Link>
            <Link to="/Fireblog-App/login" style={{textDecoration:"none", color: "black"}}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Link>
            </Menu>):(<Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            ><Link to="/Fireblog-App/login" style={{textDecoration:"none", color: "black"}}>
              <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
              <Link to="/Fireblog-App/register" style={{textDecoration:"none", color: "black"}}>
              <MenuItem onClick={handleClose}>Register</MenuItem>
              </Link>
            </Menu>)}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

