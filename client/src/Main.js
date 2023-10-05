import React from "react";
import Routing from "./routes/Routing";
import Grid from "@mui/material/Grid";
import Navigation from "./header/Navigation";
import AppContainer from "./header/AppContainer";

/**
 * Constructs the template for app container
 * @returns
 */
function Main() {
  return (
    <AppContainer>
      <Grid container direction="row">
        <Grid item md={12}>
          <Navigation />
        </Grid>
        <Grid item lg={12}>
          <Routing />
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default Main;
