export default function Table(){
  return (
    <table  style={{padding:"100px"}}>
    <thead>
    <tr>
      <th><center>ID</center></th>
      <th><center>Name</center></th>
      <th><center>Location</center></th>
      <th><center>Assigned To</center></th>
      <th><center>Assigned Status</center></th>
      <th><center>Controls</center></th>
  
    </tr>
    </thead>
    <tbody>
      {
      data.map((obj,i)=><Tr {...obj} key={i}/>)
      }
    </tbody>
    </table>

  )
  }

  function Tr({personalid, fname ,lname, imageurl, location, description, date, assignedto, assignedStatus}){
    return(
      <tr>
        <td>{personalid||"Unknown"}</td>
        <td>{fname}</td>
        <td>{location}</td>
        <td>{assignedto}</td>
        <td>{assignedStatus}</td>
        <td> ✏ ❌</td>
      </tr>
    )
  }