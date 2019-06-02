import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

export default withWidth()(({ muscles, category, onSelect, width }) => {
  const index = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered={width !== 'xs'}
        value={index}
        onChange={onIndexSelect}
        scrollable={width === 'xs'}
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
});
