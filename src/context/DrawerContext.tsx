import { useState, createContext, useMemo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DrawerContext = createContext({
  drawerName: "",
  data: null,
});

function DrawerContextProvider({ children }: Props) {
  const [state, setState] = useState({
    drawerName: "",
    data: null,
  });

  const value: any = useMemo(
    () => ({
      state,
      setState,
    }),
    [state]
  );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

export default DrawerContextProvider;
