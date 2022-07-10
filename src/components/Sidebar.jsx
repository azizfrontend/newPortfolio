import React from 'react'
import { Outlet, Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from '../image/logo.png'
import over from '../image/overview.png'
import ticket from '../image/Vector.svg'
import ideas from '../image/Vector-1.svg'
import contacts from '../image/Vector-2.svg'
import agents from '../image/Vector-3.svg'
import articles from '../image/Vector-4.svg'
import setting from '../image/Vector-4.svg'
import subs from '../image/Vector-4.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>     
      <ul className='sidebar-list' >

        <li className='first-block'>
          <img src={logo} alt="logo" />
         <span>Dashboard Kit </span>
        </li>
        <li>
        <img src={over} alt="over" />
         <span> <Link to="overview">Overview</Link></span>
        </li>
        <li>
        <img src={ticket} alt="ticket" />
         <span> <Link to="tickets">Tickets</Link></span>
        </li>
        <li>
        <img src={ideas} alt="ideas" />
         <span>Ideas</span>
        </li>
        <li>
        <img src={contacts} alt="contacts" />
        <span>Contacts</span>
        </li>
        <li>
        <img src={agents} alt="agents" />
        <span>agents</span>
        </li>
        <li>
        <img src={articles} alt="articles" />
        <span>articles</span>
        </li>
        <hr />

        <li>
        <img src={setting} alt="setting" />
        <span>Setting</span>
        </li>
        <li>
        <img src={subs} alt="subs" />
        <span>Subscription</span>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default Sidebar
