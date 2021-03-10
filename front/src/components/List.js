import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function List() {
    const [infos, setInfos] = useState([]);
        
    useEffect(() => {
        axios
            .get('https://apis.wilders.dev/wild-games/games/')
            .then((res) => res.data)
            .then((infos) => {
                console.log(infos) ||
                setInfos(infos);
            })    
    },[])
    console.log(infos[0].name)
    return(
        <div className="content">
            {/* {infos.map((info, index) => (
                <p>{info.name}</p>
            ))} */}
            {/* <h1>{infos[0].name}</h1> */}
        </div>
    )
    }