
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const VideoWindow = () => {

    const {id} = useParams();

    // console.log(id)

    return (
        <ReactPlayer
      url={`https://www.youtube.com/watch?v=${id}`}
      playing
      controls={true}
      width="100vw"
      height="100vh"
      config={{
        youtube: {
          playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            modestbranding: 1,
          },
        },
      }}
    />
    )
}


export default VideoWindow;