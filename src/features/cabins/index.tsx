import { useDrawer } from "@/hooks/useDrawer";
import { Button } from "@/reusables/common";
import { Box, Typography } from "@mui/material";
import AddCabin from "./Drawer/AddCabin";

const Cabins = () => {
  const [drawer, setDrawer] = useDrawer();

  const handleAddCabin = () => {
    setDrawer({ ...drawer, drawerName: "addCabin" });
  };

  console.log(drawer);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Cabins</Typography>
        <Typography>
          <Button onClick={handleAddCabin}> Add Cabin</Button>
        </Typography>
      </Box>
      <AddCabin />
    </Box>
  );
};

export default Cabins;
