import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { color } from '@mui/system';
import Table from "../../components/Table"

const columns = [
    { field: 'avatar', headerName: 'Avatar', width: 160, color:"#2F0F1C" },
  { field: 'id', headerName: 'Personal Id', width: 160 },
  { field: 'Name', headerName: 'Name', width: 160 },
  { field: 'location', headerName: 'Location', width: 160 },
  { field: 'assignedto', headerName: 'Assigned To', width: 160 },
  { field: 'assignedStatus', headerName: 'Status', width: 160 },
  { field: 'action', headerName: 'Action', width: 150, color:"#2F0F1C" },
];

const rows = [
  { avatar: "", id: 101, Name: 'piyush', location: "Rourkela", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌", firstName: 'Jon', age: 35 },
  { id: 102, Name: 'Rahul', location: "Chend Colony", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌"},
  { id: 103, Name: 'Subham', location: "Sector 12", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌"},
  { id: 104, Name: 'Ramesh', location: "Koyal Nagar", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌",},
  { id: 105, Name: 'Rakesh', location: "Sector 20", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌"},
  { id: 106, Name: 'Rakesh', location: "Sector 20", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌"},
  { id: 109, Name: 'rohit', location: "india", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌"},
  { id: 109, Name: 'Rohan', location: "ASMR", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌"},
  { id: 125, Name: 'Rohan', location: "ASMR", assignedto: "Mr. Rocket", assignedStatus: "True", action: " ✏ ❌"},
];

export default function DataTable() {
  return (<div>
    <div style={{ height: 800, width: '100%', background: "linear-gradient(180deg, rgb(237, 219, 199) 0%, rgb(255, 212, 149) 15%, rgb(249, 245, 231) 15%, rgb(248, 234, 216) 100%)", color:"#2F0F1C"}}>
        <h1><center>All Profiles</center></h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    
    </div>
  );
}
