/* eslint-disable @typescript-eslint/no-empty-function */
import { useDrawer } from "@/hooks/useDrawer";
import { Button, NewTable } from "@/reusables/common";
import { Box, Typography } from "@mui/material";
import AddCabin from "./Drawer/AddCabin";

const COLUMNS: any = [
  {
    id: 1,
    key: "name",
    label: "Cabin's Name",
    isDeep: false,
    sort: true,
  },

  {
    id: 2,
    key: "cabin_code",
    label: "Cabin Code",
    align: "left",
    isDeep: false,
    hideSort: true,
  },

  {
    id: 3,
    key: "location",
    label: "Location",
    align: "left",
    isDeep: false,
    hideSort: true,
  },

  {
    id: 4,
    key: "created_at",
    label: "Date Created",
    align: "left",
    isDeep: false,
    sort: false,
  },
  {
    id: 5,
    key: "status",
    label: "Status",
    align: "left",
    hideSort: true,
  },
];

const RESULTS = [
  {
    status: "PENDING",
    created_at: new Date().toDateString(),
    location: "Ibeju Lekki",
    cabin_code: "TPS-1013465B",
    name: "Isolog",
  },
];
const Cabins = () => {
  const [drawer, setDrawer] = useDrawer();

  const handleAddCabin = () => {
    setDrawer({ ...drawer, drawerName: "addCabin" });
  };

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
      <NewTable
        isLoading={false}
        emptyIconTitle="No Cabin"
        emptyIconMessage="No cabin has been added on the system"
        EmptyIcon={<></>}
        results={RESULTS}
        total={0}
        columns={COLUMNS}
        handleChangePage={() => {}}
        handleChangeRowsPerPage={() => {}}
        page={0}
        rowsPerPage={10}
        // onClick={(row: { id: string }) => handleRowClick=(() => {})}
        // handleMenu={handleMenu}
        // valueToOrderBy={valueToOrderBy}
        // orderDirection={orderDirection}
        // handleRequestSort={handleRequestSort}
        moreMenu
        // cellHeight={}
      />
      <AddCabin />
    </Box>
  );
};

export default Cabins;
