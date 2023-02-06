import { Table } from '@mui/material';

import React from 'react'
import Profileitems from './Profileitems';

const ProfileList = ({data}) => {
    console.log(data);
  return <div>
    <Table container>
      {data.map((profile) =>(
        <Table item key={profile._id}>
          <Profileitems 
          personalid={profile.personalid}
          fname={profile.fname}
          lname={profile.lname}
          location={profile.location}
          description={profile.description}
          date={profile.date}
          assignedto={profile.assignedto}
          imageurl={profile.imageurl}/>
              
        </Table>
      ))}

    </Table>
  </div>
  
};

export default ProfileList