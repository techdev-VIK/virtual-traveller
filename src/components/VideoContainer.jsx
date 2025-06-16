import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";


const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {

        const data = await fetch(YOUTUBE_VIDEOS_API);

        const response = await data.json();

        console.log(response)

        setVideos(response.items);
    }

    return (

        <div className="container py-5">
            <div className="row">
            {videos.length > 0 && videos.map((video) => (
                    <VideoCard key={video.id} items={video}  />
            ))}
            </div>
        </div>
    )
}

export default VideoContainer;