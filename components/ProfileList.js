import { Grid, Stack } from '@mui/material';
import Script from 'next/script';

import React from 'react'
import Profileitems from './Profileitems';

const ProfileList = ({data}) => {
    console.log(data);
    // console.log(data[0].fname);
    // let tableData="";
    // data.map((values)=>{
    //   tableData=`<h1>${values.fname}</h1>`;
    // });
  return <center><div>
    {/* <Stack>
      {data.map((profile) =>(
        <Stack  item key={profile._id}>
          <Profileitems 
          personalid={profile.personalid}
          fname={profile.fname}
          lname={profile.lname}
          location={profile.location}
          description={profile.description}
          date={profile.date}
          assignedto={profile.assignedto}
          assignedStatus= {profile.assignedStatus}
          imageurl={profile.imageurl}/>
              
        </Stack >
      ))}

    </Stack ><Script>{`let tableData="";
    document.getElementById("table_body").innerHTML=tableData;`}</Script> */}
    <table>
            <thead>
                <tr>
                    <th>
                        <span>prsnlID</span>
                    </th>
                    <th>
                        <span>Name</span>
                    </th>
                    <th>
                        <span>Locaton</span>
                    </th>
                    <th>
                        <span>Status</span>
                    </th>
                    <th>
                        <span>Date</span>
                    </th>
                    <th>
                        <span>Detail</span>
                    </th>
                    <th>
                        <span>Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody>
               {
                data.map((obj,i)=> <Tr{...obj}key={i}/>)
               }
            </tbody>
        </table>
  </div></center>
  
};

export default ProfileList
function Tr({personalid, fname, lname, description, location, date, _id}){
  return(
      <tr>
                  
      <td><span> {personalid || "NA"} </span></td>
      <td><span> {fname || "NA"} {lname} </span></td>
      <td><span> {description || "NA"} </span></td>
      <td><span> {location || "NA"}</span></td>
      <td><span> {date || "NA"}</span></td>
      <td><a href={`/Update_Profile/${_id}`}><button><span>View Profile</span></button></a></td>
      <td><a href={`/Assign_Volunteer/${_id}`}><button><span>Assign</span></button></a><a href={`/Delete_Profile/${_id}`}><button><span>Remove</span></button></a></td>
          
      </tr>
  )
}



// import { Table } from '@mui/material';

// import React from 'react'
// import Profileitems from './Profileitems';

// const ProfileList = ({data}) => {
//     console.log(data);
//   return <div>
//     <Table container>
//       {data.map((profile) =>(
//         <Table item key={profile._id}>
//           <Profileitems 
//           personalid={profile.personalid}
//           fname={profile.fname}
//           lname={profile.lname}
//           location={profile.location}
//           description={profile.description}
//           date={profile.date}
//           assignedto={profile.assignedto}
//           imageurl={profile.imageurl}/>
              
//         </Table>
//       ))}

//     </Table>
//   </div>
  
// };

// export default ProfileList
