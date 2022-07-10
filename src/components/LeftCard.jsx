import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '546px',
  maxWidth: 600,
  bgcolor: 'background.paper',
 

  borderRadius: '10px',
};

export default function LeftCard() {
  return (
    <List className='left-list' sx={style} component="nav" aria-label="mailbox folders">
      <div className="top-title">
        <h3>Unresolved tickets</h3>
        <p>View details</p>
      </div>
     <ListItem>
      <ListItemText className='first para' secondary='Group :'/>
      <ListItemText  className='span' secondary='Support'/> 
     </ListItem>
      <ListItem button className='flex-sb' divider>
        <ListItemText className='first' primary="Waiting on Feature Request" />
        <ListItemText className='second1' primary="4286" />
      </ListItem>
      <Divider light />
      <ListItem button className='flex-sb' divider>
        <ListItemText className='first' primary="Awaiting Customer Response" />
        <ListItemText className='second2' primary="4286" />
      </ListItem>
      <Divider light />
      <ListItem className='flex-sb' button divider>
        <ListItemText className='first' primary="Awaiting Developer Fix" />
        <ListItemText className='second3' primary="4286" />
      </ListItem>
      <Divider light />
      <ListItem className='flex-sb' button>
        <ListItemText className='first' primary="Pending" />
        <ListItemText className='second4' primary="4286" />
      </ListItem>
    </List>
  );
}