import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import getResults from "../util";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  pos: {
    marginBottom: 12
  }
});

export default function Home() {
  const classes = useStyles();

  const navigate = useNavigate();

  async function getResponse() {
    let response = null;
    response = await getResults("all", "dell");
    navigate("/results", { state: { response: response } });
  }

  return (
    <Grid container>
      <Grid item md={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              SLASH
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              SE 2021
            </Typography>
            <Button size="medium" variant="contained" color="primary" onClick={getResponse} to="/results">
              Get Results
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
