import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Profileitems = ({personalid, fname, lname, location, description, date, assignedto, imageurl}) => {
  return (<div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img src={imageurl} alt={fname} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
    <table>
      <tbody>
      <tr>
        <th><center>ID</center></th>
        <th><center>Name</center></th>
        <th><center>Pickup Address</center></th>
        <th><center>Memo No</center></th>
        <th><center>NGO Assigned</center></th>
        <th><center>Controls</center></th>
    
      </tr>
      <tr>
        <td>00001</td>
        <td>{fname}</td>
        <td>Chrompet</td>
        <td>{description}</td>
        <td>{location}</td>
        <td><center><button type="button" className="btn btn-primary">Edit Details</button>
        <button type="button" className="btn btn-danger">Send Alert</button></center></td>
      </tr>
      <tr>
        <td>00001</td>
        <td>{fname}</td>
        <td>Chrompet</td>
        <td>{description}</td>
        <td>{location}</td>
        <td><center><button type="button" className="btn btn-primary">Edit Details</button>
        <button type="button" className="btn btn-danger">Send Alert</button></center></td>
      </tr>
      <tr>
        <td>00001</td>
        <td>Ram</td>
        <td>Chrompet</td>
        <td>12345</td>
        <td>SRM</td>
        <td><center><button type="button" className="btn btn-primary">Edit Details</button>
        <button type="button" className="btn btn-danger">Send Alert</button></center></td>
      </tr>
      <tr>
        <td>00001</td>
        <td>Ram</td>
        <td>Chrompet</td>
        <td>12345</td>
        <td>SRM</td>
        <td><center><button type="button" className="btn btn-primary">Edit Details</button>
        <button type="button" className="btn btn-danger">Send Alert</button></center></td>
      </tr>
      <tr>
        <td>00001</td>
        <td>Ram</td>
        <td>Chrompet</td>
        <td>12345</td>
        <td>SRM</td>
        <td><center><button type="button" className="btn btn-primary">Edit Details</button>
        <button type="button" className="btn btn-danger">Send Alert</button></center></td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Profileitems