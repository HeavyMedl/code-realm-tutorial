import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ muscles }) => (
  <Paper>
    <Tabs indicatorColor="primary" textColor="primary" centered value={0}>
      <Tab label="All" />
      {muscles.map(group => (
        <Tab label={group} />
      ))}
    </Tabs>
  </Paper>
);
