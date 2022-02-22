import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
/* const UserNames=[
  {name:"James Muriuki Maina"}
] */

const ProfileHeader =()=>{
  
  return(
    <section className='profileHeader'>
      <div className="profilePicture">
          <Tooltip>
              <IconButton onClick={""} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"
                      height={34}
                      src=""
                      width={54}/>
              </IconButton>
            </Tooltip>
      </div>
      <div className='profileHeaderUserName'>
        <h5>James Muriuki Maina</h5>
        </div>
        
    </section>

  )
}
export default ProfileHeader;