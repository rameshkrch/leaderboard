import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import Typography from '@mui/material/Typography';

let scoreObj = [];

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
    if (id == 0) {
        scoreObj = [];
        let finalScore = (teamId) => data.filter(i => i.teamId === teamId).reduce((a, b) => a + b.score, 0);
        const teams = Math.max(...data.map(o => o.teamId));
        let finalTeam = [];
        let finalName = [];
        let scoreArr = [];
        for (let i = 1; i <= teams; i++) {
            data.sort((a, b) => b.score - a.score);
            finalName = data.find(e => e.teamId == i);
            finalTeam.push(finalName);
            scoreArr = finalTeam.map(obj => {
                if (obj.teamId == i) {
                    return {...obj, score: finalScore(i)};
                }
                return obj;
            })
        }
        console.log(scoreArr);
        scoreObj = scoreArr;
    }
    else {
        scoreObj = [];
        scoreObj = data.filter(val => {
            return val.gameId === id;
        })
    }
    return scoreObj.sort((a, b) => b.score - a.score);

}
