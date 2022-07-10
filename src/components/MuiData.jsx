import React, { useEffect, useState } from 'react'
import trigger from '../image/trigger.svg'
import filter from '../image/filter.svg'
import sort from '../image/sort.svg'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  tabClasses,
  Grid,
  Avatar,
  Typography
} from '@mui/material';










const MuiData = () => {
  const [soat, setSoat] = useState(new Date());
  const [kun, setKun] = useState(new Date());




  let Users = [],
    STATUSES = ['HIGH', 'NORMAL', 'LOW'],
    QUESTIONS = [
      'Contact Email not Linked', 'Adding Images to Featured Posts', 'When will I be charged this month?', 'Payment not going through', 'Unable to add replies', 'Downtime since last week', 'How do I change my password?'
    ],
    NAMES = ['Tom Cruise', 'Matt Damon', 'Robert Downey', 'Christian Bale', 'Henry Cavil', 'Chris Evans', 'Sam Smith', 'Steve Rogers'],
    PHOTOS = ['https://media.istockphoto.com/photos/confident-young-man-in-casual-green-shirt-looking-away-standing-with-picture-id1324558913?b=1&k=20&m=1324558913&s=170667a&w=0&h=rD4nowfc1q5ZxQsT6SRQyw6as33CYCIRF4LPs6vkqEM=', 'https://media.istockphoto.com/photos/attractive-man-feeling-cheerful-picture-id1365223878?b=1&k=20&m=1365223878&s=170667a&w=0&h=kb0Ow5MJq0n5spA-BIEGLL18GugMqaBh7pnX-IyCfwY=', 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg', 'https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg', 'https://cdn.pixabay.com/photo/2015/01/15/13/06/woman-600238__340.jpg', 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg', 'https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__340.jpg'

    ]

  let lastid = 1;
  const num = [1, 2, 3];
  for (let i = 0; i < 16; i++) {
    Users[i] = {
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      scheduleDate: 'on 24.05.2019',
      updated: 'updated ' + Math.floor(Math.random(1) * num.length + 1) + ' day ago',
      date: kun.toLocaleDateString('en-US'),
      time: soat.toLocaleTimeString('en-US'),
      status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
      questions: QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)],
      photos: PHOTOS[Math.floor(Math.random() * PHOTOS.length)],
      id: ++lastid

    }
  }
  console.log(Users);
  return (
    <div>
      <TableContainer sx={{
        minWidth: 650,
        maxWidth: 1150,
        border: '1px',
        border: 'solid',
        border: '#DFE0EB',
        borderRadius: '8px',
        margin: '10px 10px',
      }} component={Paper} className={tabClasses.TableContainer} >
        <Table className={tabClasses.table} sx={{
          minWidth: 650,
          maxWidth: 1150,
        }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography className='ticket-title'>All Ticket</Typography></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell><img src={sort} alt="sort" /> Sorting</TableCell>
              <TableCell><Typography className='ticket-filter' align='left'><img src={filter} alt="filter" /> Filter</Typography></TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 400,
                  opacity: 0.7,
                  fontSize: '14px',
                  color: '#9FA2B4'
                }}>Ticket details</TableCell>
              <TableCell
                sx={{
                  fontWeight: 400,
                  opacity: 0.7,
                  fontSize: '14px',
                  color: '#9FA2B4'
                }}>Customer name</TableCell>
              <TableCell
                sx={{
                  fontWeight: 400,
                  opacity: 0.7,
                  fontSize: '14px',
                  color: '#9FA2B4'
                }}>Date</TableCell>
              <TableCell
                sx={{
                  fontWeight: 400,
                  opacity: 0.7,
                  fontSize: '14px',
                  color: '#9FA2B4'
                }}>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: '1px' } }}
              >

                <TableCell >
                  <Grid container >
                    <Grid item lg={2} >
                      <Avatar src={row.photos} />
                    </Grid>
                    <Grid item lg={10} >
                      <Typography>{row.questions}</Typography>
                      <Typography color='textSecondary' variant="caption">{row.updated}</Typography>

                    </Grid>

                  </Grid>
                </TableCell>
                <TableCell >
                  <Typography> {row.name}</Typography>
                  <Typography color='textSecondary' variant="caption">  {row.scheduleDate}</Typography>

                </TableCell>
                <TableCell >
                  <Typography> {row.date}</Typography>
                  <Typography color='textSecondary' variant='caption'>  {row.time}</Typography>

                </TableCell>
                <TableCell >
                  <Typography className='typo' style={
                    {
                      backgroundColor: ((row.status === 'HIGH' && '#F12B2C') || (row.status === 'LOW' && '#FEC400') || (row.status === 'NORMAL' && '#29CC97')),
                      color: 'white',
                      padding: '5px 10px'

                    }
                  } variant='button'>
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell >
                  <  img src={trigger} alt="trigger" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>

  )
}

export default MuiData
