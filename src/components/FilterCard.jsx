import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function FilterCard({setFilter}) {
    const [age, setAge] = React.useState('');

    const [subscriptionChecked, setSubscriptionChecked] = useState(false);
    const [burnerChecked, setBurnerChecked] = useState(false);

    // Event handlers to update state when checkboxes are clicked
    const handleSubscriptionChange = (event) => {
        setSubscriptionChecked(event.target.checked);
    };

    const handleBurnerChange = (event) => {
        setBurnerChecked(event.target.checked);
    };

    // console.log(subscriptionChecked, burnerChecked);



    const handleChange = (event) => {
        setAge(event.target.value);
    };

    

    // To apply the filter
    const handleApply = () => {
        setFilter({
            subscription: subscriptionChecked,
            burner: burnerChecked
        });
    }

    // To clear the filter
    const handleClear = () => {
        setSubscriptionChecked(false);
        setBurnerChecked(false);

        setFilter({
            subscription: false,
            burner: false
        });
    }

    return (
        <Box sx={{ width: 280, p: 2 }}>
            <p className='font-bold text-slate-800 mb-1'>Filters</p>
            <Divider />

            <div className='mb-5 mt-5'>
                <p className='font-sm text-slate-500 mb-1'>Type</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={subscriptionChecked} onChange={handleSubscriptionChange}/>} label="Subscription" />
                    <FormControlLabel control={<Checkbox checked={burnerChecked} onChange={handleBurnerChange}/>} label="Burner" />
                </FormGroup>
            </div>

            <Divider />
            <div className='mt-5 space-y-2'>

                <p className='font-sm text-slate-500 mb-1'>Cardholder</p>


                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select cardholder</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Select cardholder"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='flex justify-between mt-5 gap-2'>
                <Button onClick={handleApply} variant='contained' sx={{ width: "100%", backgroundColor: "#FF0063" }}>Apply</Button>
                <Button onClick={handleClear} variant='contained' sx={{ width: "100%", backgroundColor: "gray" }}>Clear</Button>
            </div>
        </Box>
    )
}

export default FilterCard
