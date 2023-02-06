import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { AppBar, Box, Tab, Tabs, Toolbar } from '@mui/material';


const Header = () => {
  const router = useRouter();
  const[value, setValue] = useState();
  const handlechange = (e, val) => {
    setValue(val);
    if (val == 0) {
      router.push("/All_Profiles");
    }
    else if (val == 1) {
      router.push("/Create_Profile");
    }
    else if (val == 2) {
      router.push("/All_Volunteer");
    }
  };
  return (<AppBar position="sticky" sx={{bgcolor:"#379237"}}>
    <Toolbar>
      <Box display= "flex" margin= {"auto"}>
        <Tabs onChange={handlechange} value={value} textColor= "inherit">
          <Tab label="All Profiles"/>
          <Tab label="Create Profile"/>
          <Tab label="Volunteer"/>
        </Tabs>
      </Box>
    </Toolbar>
  </AppBar>
  );
};
export default Header;