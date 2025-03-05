import DrawerHeader from "@/components/dashboard-layout/drawer-header";
import DashboardHeader from "@/components/dashboard-layout/header";
import MiniDrawer from "@/components/dashboard-layout/side-bar";
import { Box } from "@mui/material";

const DashboradLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardHeader />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <MiniDrawer/>
        <DrawerHeader />
      </Box>
    </Box>
  );
};

export default DashboradLayout;
