import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Mycarousel = () => {
  return (
    <div id="brandCarousel" className="carousel slide" data-bs-ride="carousel">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#brandCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#brandCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#brandCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#brandCarousel" data-bs-slide-to="3"></button>
      </div>

      <div className="carousel-inner">

        {/* Image 1 */}
        <div className="carousel-item active">
          <img src="/images/Streatwear1.jpg" className="d-block w-100  carousel-img" alt="Streetwear" width="50px" height="1000px"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Bold Street Style</h5>
            <p>Jovian Wear – Designed for confidence.</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="carousel-item">
          <img src="/images/luxury1.jpg" className="d-block w-100 carousel-img" alt="Luxury Fashion"  width="50px" height="1000px"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Luxury Everyday Wear</h5>
            <p>Premium quality fabrics and timeless style.</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="carousel-item">
          <img src="/images/chic1.jpg" className="d-block w-100 carousel-img" alt="Minimal Fashion" width="50px" height="1000px" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Minimal. Clean. Powerful.</h5>
            <p>Fashion that speaks without shouting.</p>
          </div>
        </div>

        {/* Image 4 */}
        <div className="carousel-item">
          <img src="/images/official1.jpg" className="d-block w-100 carousel-img" alt="Modern Clothing     "     />
          <div className="carousel-caption d-none d-md-block">
            <h5>Own Your Look</h5>
            <p>Step into the future with Jovian Wear.</p>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#brandCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#brandCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  )
}

export default Mycarousel