import React from 'react'
import SubCard from '../components/SubCard';
import { Box } from '@mui/material';

function Home(props) {
    
    return (
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", p: 2, justifyContent: "center" }}>
            {props?.data.map((item, ind) => {
                if(item.name.toLowerCase().includes(props.name.toLowerCase()) && (props.status === "All" || props.status === item.status)){

                    if(props.filter.subscription && !props.filter.burner){
                        if(item.card_type === "subscription")
                            return <SubCard key={ind} details={item}/>
                    }
                    else if(props.filter.burner && !props.filter.subscription){
                        if(item.card_type === "burner")
                            return <SubCard key={ind} details={item}/>
                    }
                    else{
                        return <SubCard key={ind} details={item}/>
                    }
                }

            })}
        </Box>
    )
}

export default Home
