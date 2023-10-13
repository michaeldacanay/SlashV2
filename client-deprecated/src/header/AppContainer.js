import React, { useState } from "react";
import { AppProvider } from "./AppContext";

/**
 * Defines the app container for the main page
 * @param {*} param0 takes the children component
 * @returns
 */
function AppContainer({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }
  return (
    <AppProvider
      value={{
        isDrawerOpen,
        toggleDrawer
      }}
    >
      {children}
    </AppProvider>
  );
}

export default AppContainer;
