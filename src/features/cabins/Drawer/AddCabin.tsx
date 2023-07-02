import { useDrawer } from "@/hooks/useDrawer";
import Drawer from "@/reusables/common/Drawer";
import { Typography } from "@mui/material";

const AddCabin = () => {
  const [drawer, setDrawer] = useDrawer();

  const handleUser = () => {
    setDrawer({ ...drawer, drawerName: "", data: null });
  };

  return (
    <Drawer
      drawerName="addCabin"
      titleText="Add new Cabin"
      primaryButton="Send"
      secondaryButton="Cancel"
      isSubmitting={false}
      handleSubmit={handleUser}
    >
      <Typography>Add Cabin</Typography>
    </Drawer>
  );
};

export default AddCabin;
