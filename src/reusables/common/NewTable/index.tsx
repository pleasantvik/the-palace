import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MoreVert from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import AppTabEmptyState from "../EmptyTableState";
import { CircularProgress, TableSortLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styled.NewTable";
import { TableProps } from "./newTable.type";

export default function StickyHeadTable<T, S>({
  results,
  columns,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPage,
  onClick,
  EmptyIcon,
  emptyIconTitle,
  emptyIconMessage,
  isLoading,
  isError,
  // status,
  moreMenu,
  handleMenu,
  total,
  orderDirection,
  handleRequestSort,
  valueToOrderBy,
  cellHeight,
}: TableProps<T, S>) {
  const classes = useStyles();
  const isSuccessfullyLoaded = !isLoading && !isError;
  const dataNotEmpty = !!results && results.length > 0;
  const isDataUndefined = results?.length === undefined;

  const createSortHandler = (property: string) => (event: any) => {
    handleRequestSort(event, property);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table className={classes.root} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column: any) => (
                <>
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{
                      background: "white",
                      borderBottom: "border: 2px solid #E7E7ED",
                    }}
                  >
                    <TableSortLabel
                      // active={valueToOrderBy === column.sort}
                      // direction={valueToOrderBy === column.sort ? orderDirection: 'asc'}
                      // onClick={createSortHandler(column.sort)}
                      active={column.sort}
                      onClick={createSortHandler(column.key)}
                      direction={
                        column.key === valueToOrderBy ? orderDirection : "asc"
                      }
                      hideSortIcon={true}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                </>
              ))}
              {moreMenu && (
                <TableCell
                  sx={{
                    background: "white",
                    borderBottom: "border: 2px solid #E7E7ED",
                  }}
                />
              )}
            </TableRow>
          </TableHead>

          {/* When data is succesfully fetched and  not empty */}
          {isSuccessfullyLoaded && dataNotEmpty && (
            <TableBody>
              {results?.length &&
                results.map((row: any, id: number) => {
                  return (
                    <TableRow
                      key={id}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      onClick={() => onClick?.(row)}
                      sx={{ cursor: "pointer" }}
                    >
                      {columns.map((column: any) => {
                        let value;
                        if (column.isDeep) {
                          const [val1, val2] = column.key.split(".");
                          value = row[val1][val2];
                        } else {
                          value = row[column.key];
                        }
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{
                              fontWeight: 100,
                              paddingInline: cellHeight?.paddingInline,
                              paddingBlock: cellHeight?.paddingBlock,
                            }}
                          >
                            {column.format ? column.format(+value) : value}
                          </TableCell>
                        );
                      })}
                      {moreMenu && (
                        <TableCell>
                          <IconButton
                            onClick={(event: any) => handleMenu(event, row)}
                          >
                            <MoreVert />
                          </IconButton>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          )}
          {/* When data is in fetching mode */}
          {isLoading && (
            <TableRow sx={{ "& td": { border: 0 } }}>
              <TableCell align="center" colSpan={7} rowSpan={7}>
                <Box sx={{ marginTop: 15 }}>
                  <CircularProgress />
                  <Typography
                    fontSize={20}
                    mt={3}
                    fontWeight="bold"
                    gutterBottom
                    textAlign="center"
                  >
                    Loading table ...
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
          {/* When data coming is empty and status is successfull */}
          {!isDataUndefined && !dataNotEmpty && isSuccessfullyLoaded && (
            <AppTabEmptyState
              title={emptyIconTitle}
              message={emptyIconMessage}
              Illustration={EmptyIcon}
            />
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={total || 0}
        rowsPerPage={rowsPerPage || 10}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
