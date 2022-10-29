import Link from "next/link";
import React,{useState, useEffect} from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import { collection, getDocs } from "firebase/firestore"
import { fireStore } from "../src/firebase"


const ListingGrid = () => {

  const [listings, setListings] = useState([])

  const querySnapshot =  getDocs(collection(fireStore, "properties"))

  const getListings = async () => {
    const data = []
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
        console.log(data)
      })})
    setListings(data)
  }

  useEffect(() => {
      getListings()
  },[])

  return (
    <Layout>
      <PageBanner title={"Listing Grid"} pageName={"Listing"} />
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div >
              <div className="listing-search-filter mb-40">
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center">
                      <div className="show-text">
                        <span>Showing Result 1-09</span>
                      </div>
                      <div className="sorting-dropdown">
                        <select>
                          <option disabled selected="Default Sorting">
                            Default Sorting
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <Link href="/listing-grid">
                            <a className="active">
                              <i className="ti-view-grid" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/listing-list">
                            <a>
                              <i className="ti-view-list-alt" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="listing-grid-wrapper">
                <div className="row">
                {listings.map((listing) => (  
                  <div className="col-md-4 col-sm-12">
                    <div
                      className="listing-item listing-grid-one mb-45 wow fadeInUp"
                      dta-wow-delay="40ms"
                    >
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-4.jpg"
                          alt="Listing Image"
                        />
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href={{pathname:"/listing-details-2",
                                      query:{
                                        title:listing.title,
                                        location:listing.towncity+","+listing.location,
                                        rent:listing.rent,
                                        description:listing.description,

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
                                        title:listing.title,
                                        location:listing.towncity+","+listing.location,
                                        rent:listing.rent,
                                        description:listing.description,
                                        
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingGrid;
