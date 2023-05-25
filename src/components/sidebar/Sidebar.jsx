import React from 'react'
import {
  LineStyle, Timeline, TrendingUp
  , PermIdentity, Storefront, Attachment
  , MailOutline, DynamicFeed, ChatBubbleOutline
  , WorkOutline, Report
} from '@material-ui/icons'
import { Link } from "react-router-dom";
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='sidebarIconLink'>
              <li className="sidebarListItem active">
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              < TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quic Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className='sidebarIconLink'>
              <li className="sidebarListItem ">
                <PermIdentity className='sidebarIcon' />
                Users
              </li>
            </Link>

            <li className="sidebarListItem">
              <Storefront className='sidebarIcon' />
              Products
            </li>
            <li className="sidebarListItem">
              <Attachment className='sidebarIcon' />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarListItem">
              < ChatBubbleOutline className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>













      </div>
    </div>
  )
}

export default Sidebar