import { query } from "firebase/firestore";
import Link from "next/link";
import React from "react";

const ListingDetailsRight = ({location, rent, propertyId,}) => {
  return (
    <div className="col-lg-4">
      
      <div className="sidebar-widget-area">
        <div className="widget contact-info-widget mb-30 wow fadeInUp">
          <div className="contact-info-widget-wrap">
            <div className="contact-info-content">
              <h4 className="widget-title">Property Info</h4>
              <div className="info-list">
                <p>
                  <i className="ti-location-pin" />
                    {location}
                </p>
                <p>
                  <i className="ti-money" />
                    ${rent} / month
                </p>
              </div>
              <ul className="social-link">
                <Link href={{pathname:"/apply",query:{id:propertyId}}}>
                  <button className="main-btn icon-btn">Apply Now</button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingDetailsRight;
