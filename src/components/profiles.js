import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

export default function profiles({ Leaderboard }) {
    return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
    )
}
function Item(data) {

    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 1000 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 800 }}>
                        <TableBody>
                            {
                                data.map((value, index) => (
                                    <div className="flex" key={index}>
                                        <TableRow key={index}>
                                            <TableCell style={{ width: 500 }} align="left">
                                                <div className="item">
                                                    <img src={value.img} alt="" />

                                                    <div className="info">
                                                        <h3 className='name text-dark'>{value.name}</h3>
                                                        <span>{value.teamName}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell style={{ width: 140 }} align="left">
                                                <Typography variant="h6" gutterBottom>
                                                    {value.gameId}
                                                </Typography>
                                            </TableCell>
                                            <TableCell style={{ width: 210 }} align="right">
                                                <Stack spacing={2} direction="row">
                                                    <TextField label="Add Score" focused />
                                                    <IconButton color="primary" aria-label="add to shopping cart">
                                                        <AddCircleIcon fontSize="large" />
                                                    </IconButton>
                                                </Stack>
                                            </TableCell>
                                            <TableCell style={{ width: 240 }} align="left">
                                                <Typography variant="h4" gutterBottom>
                                                    {value.score}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </div>
                                )
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}
