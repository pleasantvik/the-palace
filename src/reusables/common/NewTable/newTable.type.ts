export interface TableProps<T, S> {
  columns: Array<T>;
  results: Array<S> | undefined;
  page: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  handleChangeRowsPerPage?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  rowsPerPage?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function;
  image?: string;
  EmptyIcon?: any;
  emptyIconTitle?: string;
  emptyIconMessage?: string;
  isLoading: boolean;
  isError?: boolean;
  status?: "loading" | "success" | "error" | "idle";
  moreMenu?: boolean;
  handleMenu?: any;
  total?: number;
  orderDirection?: "asc" | "desc" | undefined;
  valueToOrderBy?: any;
  handleRequestSort?: any;
  onSort?: (data?: any) => void;
  cellHeight?: any;
}
