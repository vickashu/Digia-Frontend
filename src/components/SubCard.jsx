import React from 'react'
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LoopIcon from '@mui/icons-material/Loop';

function SubCard(props) {
    console.log(props.details);

    return (
        <div>
            <Paper className='relative' square={false} elevation={2} sx={{ width:{xs: "350px", sm: "420px"}, height: 300, p: 2 }}>
                {/* Header */}
                <p className='font-bold text-lg mb-1'>{props.details.name}</p>

                <p className='text-gray-400 text-sm mb-5'>Memberfive . Budget</p>
                
                {
                    props.details.card_type === "burner"
                    ? (<div className='absolute top-5 right-5 bg-[#FFEEF3] flex items-center justify-center' style={{ borderRadius: "50%", width: 55, height: 55 }}>
                    <LoopIcon sx={{ color: "#FD3770" }} />
                    </div>)
                    :(<div className='absolute top-5 right-5 bg-[#FFF5EC] flex items-center justify-center' style={{ borderRadius: "50%", width: 55, height: 55 }}>
                    <LocalFireDepartmentIcon sx={{ color: "#FFB76D" }} />
                    </div>)
                }
                

                <div className='flex justify-between mb-2'>
                    <div>
                        <p className='text-gray-500 text-[12px]'>AMOUNT</p>
                        <p className='text-[13px] font-semibold mt-1'>{`${props.details.available_to_spend.value} ${props.details.available_to_spend.currency}`}</p>
                    </div>

                    <div>
                        <p className='text-gray-500 text-[12px]'>FREQUENCY</p>
                        <p className='text-[13px] font-semibold mt-1'>Monthly</p>
                    </div>

                    <div>
                        <p className='text-gray-500 text-[12px]'>{props.details.card_type === "burner" ? "EXPIERY": "LIMIT"}</p>
                        <p className='text-[13px] font-semibold mt-1 text-center'>{props.details.card_type === "burner" ? `${props.details.expiry} 2023` : `${props.details.limit}`}</p>
                    </div>

                </div>

                {/* Horizontal bar */}
                <div className="w-full bg-slate-400 h-2 flex mt-5" style={{ borderRadius: "10px" }}>
                    <div className="w-[50%] h-full bg-[#00994B]" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}></div>
                    <div className="w-[50%] h-full bg-[#FF0063]" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}></div>
                </div>

                <div className='space-y-2 mt-5'>
                    <div className='flex justify-between '>
                        <div className='flex gap-2 items-center'>
                            <FiberManualRecordIcon sx={{ width: 10, paddingTop: 0.5, color: "#00994B" }} />
                            <p className='text-gray-600 text-sm'>Spent</p>
                        </div>

                        <p className='font-semibold text-sm'>{`${props.details.spent.value} ${props.details.spent.currency}`}</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <FiberManualRecordIcon sx={{ width: 10, paddingTop: 0.5, color: "#FF0063" }} />
                            <p className='text-gray-600 text-sm'>Balance</p>
                        </div>

                        <p className='font-semibold text-sm'>{`${props.details.available_to_spend.value} ${props.details.available_to_spend.currency}`}</p>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default SubCard
