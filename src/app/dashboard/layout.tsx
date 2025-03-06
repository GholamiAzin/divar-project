import DrawerHeader from "@/components/dashboard-layout/components/drawer-header";
import DashboardHeader from "@/components/dashboard-layout/dashboard-header";
import DrawerProvider from "@/components/dashboard-layout/drawer-provider";
import MiniDrawer from "@/components/dashboard-layout/mini-drawer";
import { Box } from "@mui/material";

const DashboradLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerProvider>
        <DashboardHeader />
        <MiniDrawer />
      </DrawerProvider>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default DashboradLayout;
