import { Link } from "react-router-dom";

const Destinations = () => {

    return (
    <>
   <section className="container text-center mt-4">
     <h1>Explore Our Destinations</h1>
   </section>

    <section className="container mx-auto row mt-3">
      <div className="col-md-4">
        <div className="card mt-3">
          <img src="https://placehold.co/600x400?text=Italy" className="card-img-top" alt="Italy"/>

          <div className="card-body">
            <h4>Italy</h4>
            <p>Discover the beauty of Italy.</p>
            <Link to="/italy" className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mt-3">
          <img src="https://placehold.co/600x400?text=Tokyo" className="card-img-top" alt="Tokyo"/>

          <div className="card-body">
            <h4>Tokyo</h4>
            <p>Discover the beauty of Tokyo.</p>
            <Link to="/tokyo" className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mt-3">
          <img src="https://placehold.co/600x400?text=Bali" className="card-img-top" alt="Bali"/>

          <div className="card-body">
            <h4>Bali</h4>
            <p>Discover the beauty of Bali.</p>
            <Link to="/bali" className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mt-3">
          <img src="https://placehold.co/600x400?text=Rome" className="card-img-top" alt="Rome"/>

          <div className="card-body">
            <h4>Rome</h4>
            <p>Discover the beauty of Rome.</p>
            <Link to="/rome" className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}


export default Destinations;