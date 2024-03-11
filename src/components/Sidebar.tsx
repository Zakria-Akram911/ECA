import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      {/* <Divider /> */}
      <List sx={{ p: "0px 0px 0px 20px" }}>
        {[
          {
            name: "Dashboard",
            link: "/",
          },
          {
            name: "Categories",
            link: "/categories",
          },
          {
            name: "Products",
            link: "/products",
          },
          {
            name: "Orders",
            link: "/orders",
          },
          {
            name: "Chats",
            link: "/chats",
          },
          {
            name: "Payment Options",
            link: "/payment-options",
          },
          {
            name: "Banners",
            link: "/banners",
          },
          {
            name: "Promotions",
            link: "/promotions",
          },
          // {
          //   name: "Guidelines",
          //   link: "/guidelines",
          // },
        ].map((text) => (
          <ListItem key={text.name} disablePadding className="sidebar">
            <NavLink
              to={`${text.link}`}
              style={{
                width: "100%",
                color: "#222222",
                fontSize: "18px",
                letterSpacing: "0.5px",
                textAlign: "center",
                borderRadius: "3px",
                textDecoration: "none",
                margin: "5px 0px",
                fontWeight: 800,
              }}
            >
              <ListItemButton
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                  border: "0.5px solid #939393",
                  borderRadius: "3px",
                  fontWeight: 500,
                }}
              >
                <ListItemText
                  sx={{ fontFamily: "myAvenirMedium" }}
                  primary={text.name}
                  disableTypography
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "white",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "0px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          justifyContent: "center",
          display: "flex",
          mt: "10px",
          //pr: "130px",
        }}
      >
        <div>
          <Toolbar />
          {props.children}
        </div>
      </Box>
    </Box>
  );
}
