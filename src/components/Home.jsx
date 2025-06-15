import { Link } from "react-router-dom";

const Home = () => {

    return (
    <main>
    <section className="container text-center text-light mt-4 py-5 bg-primary">
      <h1>Welcome to Virtual Traveller</h1>
      <p>Explore exciting destinations with us!</p>
    </section>

    <section className="container text-center mt-5">
      <h2>Featured Destinations</h2>
    </section>

    <section className="container mx-auto row mt-3">
      <div className="col-md-4">
        <div className="card mt-3">
          <img src="https://placehold.co/600x400?text=Italy" className="card-img-top" alt="Italy" />

          <div className="card-body">
            <h4>Italy</h4>
            <p>Discover the beauty of Italy.</p>
            <Link href="italy.html" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mt-3">
          <img src="https://placehold.co/600x400?text=Tokyo" className="card-img-top" alt="Tokyo" />

          <div className="card-body">
            <h4>Tokyo</h4>
            <p>Discover the beauty of Tokyo.</p>
            <Link href="tokyo.html" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mt-3">
          <img src="https://placehold.co/600x400?text=Bali" className="card-img-top" alt="Bali" />

          <div className="card-body">
            <h4>Bali</h4>
            <p>Discover the beauty of Bali.</p>
            <Link href="bali.html" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="container text-center mt-5">
      <h2>Discover More</h2>
      <p className="fs-5 fw-light mt-3">Explore our handpicked destinations and create memories that last a lifetime.</p>
      <Link to="/destinations" className="btn btn-primary">Explore More</Link>
    </section>
  </main>
    )
}

export default Home;