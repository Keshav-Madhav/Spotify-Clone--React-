import React from 'react'
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from '@mui/material';

function Header() {
    return (
        <div className='header'>
            <div className="left">
                <SearchIcon/>
                <input type="text" placeholder='Search for Artists, Songs, or Podcasts'/>
            </div>

            <div className="right">
                <Avatar src='' alt='Keshav'/>
                <h4>Killowatts</h4>
            </div>
        </div>
    )
}

export default Header