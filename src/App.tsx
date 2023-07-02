import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./themes";
import RenderRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline>
        <RenderRoutes />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
