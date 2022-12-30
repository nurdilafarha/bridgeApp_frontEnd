import { Stack } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../navigation/Navbar';
import Sidebar from '../navigation/Sidebar';

const Catatan = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/catatan");
    };
  return (
    <div>
        <Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar/>
            </Stack>
        <div className="body">
        </div>
    </div>
  )
};

export default Catatan
