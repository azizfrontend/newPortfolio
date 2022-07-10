import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import AddBoxIcon from '@mui/icons-material/AddBox';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Avatar, ListItemAvatar, ListItemIcon } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const style = {
  width: '546px',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '1px',
  border: 'solid',
  border: '#DFE0EB',
  

  borderRadius: '10px',
};

export default function RightCard() {
  return (
    <List className='right-list' sx={style} component="nav" aria-label="mailbox folders">
      <div className="top-title flex">
        <h3>Tasks</h3>
        <p>View all</p>
      </div>
      <ListItem>
        <ListItemText className='first para' secondary='Today' />

      </ListItem>
      <Divider />
      <ListItem button divider >
        <ListItemText className='create' primary="Create new task" />
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar className='avatar-icon'>
            <FontAwesomeIcon className='icon-plus'  color="black" size='xs' icon={faPlus} />
            </Avatar>
          </ListItemAvatar>
        </ListItemIcon>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <Checkbox className='check'
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <ListItemText primary="Finish ticket update" />
        <button
        className='btn1'
          color="white"
          edge="end"
          
         
        >
         Urgent
        </button>
    
      </ListItem>
      <ListItem button divider>
        <Checkbox className='check'
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <ListItemText primary="Create new ticket example" />
        <button
          className='btn2'
          color="primary"
          edge="end"
          
         
        >
         New
        </button>
      </ListItem>
      <Divider light />
      <ListItem button>
      <Checkbox className='check'
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <ListItemText primary="Update ticket report" />
        <button
           className='btn3'
          color="primary"
          edge="end"
          
         
        >
         Default
        </button>
      </ListItem>
    </List>
  );
}