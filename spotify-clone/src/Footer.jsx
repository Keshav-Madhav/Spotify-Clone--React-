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
                <img src="" alt="" className='albumImg'/>
                <div className="songInfo">
                    <h4>hello song</h4>
                    <p>keshav</p>
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