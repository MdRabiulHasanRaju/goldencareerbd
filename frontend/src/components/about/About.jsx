function About() {
  return (
    <>
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{objectFit: 'cover'}} alt="" />
              </div>
            </div>
            <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
              <h1 className="mb-5">We are a Govt. Licensed (MLA - 085) Ship Manning Agency in Bangladesh</h1>
              <p style={{textAlign:"justify"}}  className="mb-5">We usually supply Crew & Officers of different grades & categories to the ship & ship management companies according to their requirements. Under our group of companies' disposal, we are running a Maritime Training Institute named Ocean Maritime Academy at Chattogram, where we provide Pre-sea Training Courses for Deck, Engine Cadets, Ratings, and all other Maritime Ancillary Training Courses required by IMO & STCW regulations.</p>
              <div className="row g-4 mb-5">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <i className="fa fa-globe fa-3x text-primary mb-3" />
                  <h5 className="text-uppercase">Complete Crew Management and Manning Services</h5>
                  <p style={{textAlign:"justify"}} className="m-0">We offer a complete range of crew management and Manning services to ship-owning companies. Our experienced and qualified staff can provide a wide range of crew management services, from recruiting and onboarding to training and debriefing.</p>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <i className="fa fa-shipping-fast fa-3x text-primary mb-3" />
                  <h5 className="text-uppercase">Sustainability</h5>
                  <p style={{textAlign:"justify"}} className="m-0">At Golden Career Ship Management, we take utmost care in our approach to sustainability. We are committed to taking pride in onboarding only the most qualified crew and officers for all foreign-going ships.</p>
                </div>
              </div>
              <a href className="btn btn-primary py-3 px-5">Explore More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase mb-3">Approval</h6>
              <h1 className="mb-5 text-uppercase">#Govt. licensed</h1>
              <p className="mb-5">Golden Career Ship Management is a Govt. licensed (License No.: MLA 085) and ISO Certified ship manning agency in Bangladesh approved by the Department of Shipping (DOS).</p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">+019 79 843 333</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <div className="bg-primary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-users fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-ship fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">Complete Shipments</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-star fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
