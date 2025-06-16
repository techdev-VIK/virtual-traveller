import { Link } from "react-router-dom";


const VideoCard = ({items}) => {

    console.log(items)

    const {snippet} = items;

    if(!snippet) return null;

    return (
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <img src={snippet.thumbnails.high.url} className="card-img-top" alt={snippet.title}/>
                <div className="card-body">
                    <h5 className="card-title">
                        {snippet.title}
                    </h5>
                    <p className="card-text">
                        {(snippet.description).split(".")[0] + "."}
                    </p>
                    <Link to={`/destinations/${items.contentDetails.videoId}&t=30s`} className="btn btn-primary">
                        Start Driving
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;