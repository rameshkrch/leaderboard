import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import Typography from '@mui/material/Typography';

export default function Board() {

    const [gameId, setgameId] = useState(0);

    const handleClick = (e) => {
        setgameId(e.target.dataset.id)
    }
    return (
        <div className="board">
            <Typography variant="h2" gutterBottom>
                Score board
                </Typography>

            <div className="duration">
                <button onClick={handleClick} data-id='1'>Game 1</button>
                <button onClick={handleClick} data-id='2'>Game 2</button>
                <button onClick={handleClick} data-id='3'>Game 3</button>
                <button onClick={handleClick} data-id='4'>Game 4</button>
                <button onClick={handleClick} data-id='5'>Game 5</button>
                <button onClick={handleClick} data-id='0'>All-Games</button>
            </div>

            <Profiles Leaderboard={between(Leaderboard, gameId)}></Profiles>

        </div>
    )
}

function between(data, id) {
    let scoreObj = [];
    if (id == 0) {
        scoreObj = data;
    }
    else {
        scoreObj = data.filter(val => {
            return val.gameId === id;
        })
    }
    return scoreObj.sort((a, b) => b.score - a.score);
}
