import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Outlet, Link } from "react-router-dom";



import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';

function Nav() {

  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>

            {/* <Typography variant="h6" component="div" className='ps-3 hh' >
              <img src={logo} alt="" width='50px' />
            </Typography> */}

            <Typography variant="h6" component="div" className='ps-3 hh' >
              <Link to="/" className='text-white text-decoration-none'>Entertainment</Link>
            </Typography>

            <Typography variant="h6" component="div" className='ps-3'>
              <Link to="/sports" className='text-white text-decoration-none'> Sports</Link>
            </Typography>

            <Typography variant="h6" component="div" className='ps-3'>
              <Link to="/bitcoin" className='text-white text-decoration-none'>Bitcoin</Link>
            </Typography>
            <Typography variant="h6" component="div" className='ps-3'>
              <Link to="/business" className='text-white text-decoration-none'>Business</Link>
            </Typography>ss
            <Typography variant="h6" component="div" className='ps-3'>
              <Link to="/sci" className='text-white text-decoration-none'>Science</Link>
            </Typography>
            <Typography variant="h6" component="div" className='ps-3'>
              <Link to="/general" className='text-white text-decoration-none'>General</Link>
            </Typography>
            <Typography variant="h6" component="div" className='ps-3'>
              <Link to="/health" className='text-white text-decoration-none'>Helth</Link>
            </Typography>
            <Typography variant="h6" component="div" className='ps-3'>
              <Link to="/technology" className='text-white text-decoration-none'>Technology</Link>
            </Typography>
            



          </Toolbar>
        </AppBar>
      </Box>
      <div className="pt-5" align = 'center'>
        <h1 className='pt-4 pb-4'>OUR NEWS</h1>
      </div>
      <Outlet />

    </>
  )
}

export default Nav