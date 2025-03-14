"use client";
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DrawerHeader from "./components/drawer-header";
import Drawer from "./components/drawer";
import { DrawerContext } from "./drawer-provider";
import { SIDE_ITEMS } from "./constants";
import Link from "next/link";

export default function MiniDrawer() {
  const { isOpen, handleClose } = React.useContext(DrawerContext);

  return (
    <Drawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={handleClose}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {SIDE_ITEMS.map(({ text, href, Icon }, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              href={href}
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: isOpen ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: isOpen ? 3 : "auto",
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  opacity: isOpen ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
