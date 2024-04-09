import React from 'react';
import './Topbar.css';
import { NotificationsNoneTwoTone, SettingsSuggestTwoTone, HelpTwoTone } from '@mui/icons-material';



export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>

        <div className='topLeft'> 
            <span className='logo'>Admin-Mutual</span>
        </div>

        <div className='topRight'>
            <div className='topbarIconsContainer'>
               <NotificationsNoneTwoTone />
               <span className='topIconBadge'>3</span>
            </div>
            <div className='topbarIconsContainer'>
               <SettingsSuggestTwoTone />
              
            </div>
            <div className='topbarIconsContainer'>
               <HelpTwoTone />
            </div>

            <img 
              src="admin/src/img/Manny.JPG" 
              alt='' 
              className='profilePic'
               />
        </div>
        
      </div>
    </div>
  )
}
