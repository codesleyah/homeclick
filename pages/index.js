import Link from "next/link";
import React,{useState, useEffect} from "react";
import Layout from "../src/layouts/Layout";
import { collection, getDocs } from "firebase/firestore"
import { fireStore } from "../src/firebase"

const Index = () => {


  const [listings, setListings] = useState([])
  const [propertyIds, setPropertyIds] = useState([])
  const querySnapshot =  getDocs(collection(fireStore, "properties"))

  const getListings = async () => {
    const data = []
    const ids = []
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
        ids.push(doc.id)
        console.log(data)
      })})
    setListings(data)
    setPropertyIds(ids)
  }

  useEffect(() => {
      getListings()
  },[])
  
  return (
    <Layout header={2}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="hero-wrapper-two bg_cover"
          style={{ backgroundImage: "url(assets/images/hero/banner.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content">
                  <h3 className="wow fadeInDown" data-wow-delay="50ms">
                    Finding accomodation has never been easier
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                    data-wow-delay="70ms"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form_group">
                            <input
                              type="search"
                              className="form_control"
                              placeholder="Search By Category"
                              name="search"
                              required=""
                            />
                            <i className="ti-ink-pen" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Location"
                              name="location"
                              required=""
                            />
                            <i className="ti-location-pin" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="form_group">
                            <button className="main-btn icon-btn">
                              Search Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/* <!--====== Start Listing Section ======--> */}
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <span className="sub-title">Featured Properties</span>
                <h2>Explore Properties</h2>
              </div>
            </div>
          </div>

          <div className="row">
            { listings.slice(0,3).map((listing, i) => (  
            <div className="col-md-4 col-sm-12" key={i}>
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
              >
                <div className="listing-thumbnail">
                <img
                    src={listing.images? listing.images[0] : ""}
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Latest</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link  href={{pathname:"/listing-details-2",
                                      query:{
                                        id:propertyIds? propertyIds[i] : "",
                                        title:listing.title,
                                        location:listing.towncity+","+listing.location,
                                        rent:listing.rent,
                                        description:listing.description,
                                        image1:listing.images? listing.images[0] : "",
                                        image2:listing.images? listing.images[1] : "",
                                        image3:listing.images? listing.images[2]  : "",
                                        }}}>
                      <a>{listing.title}</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li>
                        <span>
                          <a href="#">{listing.towncity},{listing.location}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">${listing.rent}/month</span>
                  <div className="listing-meta">
                    <ul>
                      <li></li>
                      <li>
                        <Link  href={{pathname:"/listing-details-2",
                                      query:{
                                        id:propertyIds? propertyIds[i] : "",
                                        title:listing.title,
                                        location:listing.towncity+","+listing.location,
                                        rent:listing.rent,
                                        description:listing.description,
                                        image1:listing.images? listing.images[0] : "",
                                        image2:listing.images? listing.images[1] : "",
                                        image3:listing.images? listing.images[2]  : "",
                                        }}}>
                          <span>
                            <i className="ti-eye"></i>
                            <a href="#">View</a>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--====== End Listing Section ======--> */}   
      {/* <!--====== Start Download Section ======--> */}
      <section className="download-app">
        <div className="download-wrapper-one pt-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="app-img wow fadeInLeft">
                  <img src="assets/images/lenderz.jpg" alt="House" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="download-content-box download-content-box-one">
                  <div className="section-title section-title-left mb-25 wow fadeInUp">
                    <h2>Are you a landlord?</h2>
                  </div>
                  <p>
                    Start earning today! Quickly list your property on our platform and become part of our landlords
                  </p>
                  <ul className="button wow fadeInDown">
                    <li>
                      <Link href="/add-listing">
                        <a className="app-btn">
                          <div className="info">
                            <h6>List Property Now</h6>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!--====== End Download Section ======--> */}  
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area">
        <div
          className="newsletter-wrapper newsletter-wrapper-two bg_cover pt-75"
          style={{
            backgroundColor: "#DDDEE4",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="content">
                    <h2 style={{color:"#49747D"}}>Help us improve our services</h2>
                    <p style={{color:"#49747D"}}>Let us know what you think about our platform and help us become better</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <textarea
                      type="email"
                      className="form_control"
                      placeholder="Type your message here"
                      name="email"
                      required=""
                      rows={10}
                    />
                    <i className="ti-location-pin" />
                    <button className="main-btn">Sent Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/} 
    </Layout>
  );
};
export default Index;
