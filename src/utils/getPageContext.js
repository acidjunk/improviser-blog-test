// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import { SheetsRegistry } from "jss";
import { createMuiTheme } from "@material-ui/core/styles";
import { createGenerateClassName } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: "#2185d0",
      dark: blue[700],
    },
    secondary: {
      light: orange[300],
      main: "#f2711c",
      dark: orange[700],
      contrastText: "#ffffff",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}