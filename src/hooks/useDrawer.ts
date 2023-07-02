import { DrawerContext } from "@/context/DrawerContext";
import { useContext } from "react";

export const useDrawer = () => {
  const { state, setState }: any = useContext(DrawerContext);

  return [state, setState];
};
