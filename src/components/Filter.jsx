import { Button, IconButton, Popover, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useState } from 'react'
import FilterCard from './FilterCard';

function Filter({setInput, setFilter}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setInput("");
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    // When the input changes
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    


    return (
        <div >
            <div className='flex gap-3 p-1'>
                <TextField onChange={handleChange} id="standard-basic" label="Search..." size='small' variant="outlined" />
                <Button onClick={handleClick} startIcon={<FilterListIcon />} size='small' variant='contained'>Filter</Button>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <FilterCard setFilter={setFilter}/>
                </Popover>
            </div>
        </div>
    )
}

export default Filter
