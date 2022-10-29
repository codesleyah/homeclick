import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import ListingDetailsRight from "../src/components/ListingDetailsRight";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { GallerySlider2, reletedListingSlider2 } from "../src/sliderProps";
import { useRouter } from "next/router";

const ListingDetails2 = () => {
  const router = useRouter();
  const [video, setVideo] = useState(false);
  const title = router.query.title;
  const location = router.query.location;
  const rent = router.query.rent;
  const description = router.query.description;

  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/*====== Start breadcrumbs Section ======*/}
      <section
        className="page-breadcrumbs page-breadcrumbs-two bg_cover"
        style={{
          backgroundImage: "url(assets/images/hero/rr.png)",
        }}
      />
      {/*====== End breadcrumbs Section ======*/}
      {/*====== Start Listing Details Section ======*/}
      <section className="listing-details-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing-details-wrapper listing-details-wrapper-two">
                <div className="listing-info-area mb-30 wow fadeInUp">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="listing-info-content">
                        <h3 className="title">{title}</h3>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                {location}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-thumbnail mb-30 wow fadeInUp">
                  <img
                    src="assets/images/listing/listing-single-1.jpg"
                    alt="listing image"
                  />
                </div>

                <div className="listing-gallery-box mb-30 wow fadeInUp">
                  <h4 className="title">Photo Gallery</h4>
                  <Slider {...GallerySlider2} className="gallery-slider-one">
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-5.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-6.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-7.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-8.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-6.jpg"
                        alt="gallery image"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="listing-content mb-30 wow fadeInUp">
                  <h3 className="title">{title}</h3>
                  <p>
                   {description}
                  </p>
                </div>
               </div>
            </div>

            <ListingDetailsRight location={location} rent={rent}/>
          </div>
        </div>
      </section>
      {/*====== End Listing Details Section ======*/}
    </Layout>
  );
};
export default ListingDetails2;
