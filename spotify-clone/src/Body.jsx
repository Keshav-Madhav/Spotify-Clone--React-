import React from 'react';
import "./body.css";
import  Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Banner from './Banner';

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <Banner discover_weekly={discover_weekly} />

            <div className="songs">
                <div className="icons">
                    <PlayCircleOutlineIcon className='shuffle'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item =>(
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body
