import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

export default withWidth()(({ muscles, category, onSelect, width }) => {
  const index = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };

  return (
    <AppBar position="static">
      <Tabs
        indicatorColor="secondary"
        textColor="secondary"
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
    </AppBar>
  );
});
