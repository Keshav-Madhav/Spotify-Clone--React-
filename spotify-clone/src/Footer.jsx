import React from 'react';
import "./footer.css";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlayCircleOuytlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumneDownIcon from "@mui/icons-material/VolumeDown"

function Footer() {
    return (
        <div className='footer'>
            <div className="left">
                <img src="data:image/jpeg;base64,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" alt="" className='albumImg'/>
                <div className="songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className="center">
                <ShuffleIcon className='green'/>
                <SkipPreviousIcon className='icon'/>
                <PlayCircleOuytlineIcon className='icon' fontSize='large'/>
                <SkipNextIcon className='icon'/>
                <RepeatIcon className='green'/>
            </div>

            <div className="right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumneDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer