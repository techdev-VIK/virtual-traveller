import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player"; // Updated import if using latest version
import carDriveAnimation from "../assets/car-drive.json"; // 👈 Your animation here

const VideoWindow = () => {
  const { id } = useParams();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div style={{ pointerEvents: "none", width: "100%", height: "100%"}}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          playing
          controls={false}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                disablekb: 1,
                fs: 0,
              },
            },
          }}
        />
      </div>

      {showAnimation && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <Player
            autoplay
            loop={true}
            src={carDriveAnimation}
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoWindow;
