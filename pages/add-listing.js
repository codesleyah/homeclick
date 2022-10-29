import React,{useState} from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { collection, addDoc, } from "firebase/firestore"
import { fireStore } from "../src/firebase"
import { async } from "@firebase/util";


const AddListing = () => {
  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [towncity, setTowncity] = useState("")
  const [rent, setRent] = useState("")
  const [contactmethod, setContactmethod] = useState("")
  const [ownerphone, setOwnerphone] = useState("")
  const [owneremail, setOwneremail] = useState("")
  const [ownername, setOwnername] = useState("")
  const [ownersurname, setOwnersurname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      const property =  addDoc(collection(fireStore, "properties"), {
        title: title,
        description: description,
        location: location,
        towncity: towncity,
        rent: rent,
        contactmethod: contactmethod,
        ownerphone: ownerphone,
        owneremail: owneremail,
        ownername: ownername,
        ownersurname: ownersurname
      })
      alert("Document written with ID: ", property.id);
    }catch(error){
      alert("Error adding document: ", error);
      console.log(error)
    }

  }

  return (
    <Layout>
      <PageBanner title={"Add Listing"} pageName={"Listing"} />
      <section className="fioxen-add-listing pt-120 pb-120">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form general-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Property Details</h4>
                  <div className="row">

                    <div className="col-md-6">
                      <div className="form_group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="eg. One room"
                          name="name"
                          required=""
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form_group">
                        <label htmlFor="title">Rent per month</label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="eg. 100"
                          name="name"
                          required=""
                          onChange={(e) => setRent(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form_group">
                        <label htmlFor="title">Town / City</label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="eg. Harare"
                          name="name"
                          required=""
                          onChange={(e) => setTowncity(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form_group">
                        <label htmlFor="title">Location</label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="eg. Mabvuku"
                          name="name"
                          required=""
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Property Description"
                          name="discription"
                          required=""
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="add-listing-form details-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Landlord&apos;s Details</h4>
                  <div className="row">

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="First Name"
                          name="name"
                          required=""
                          onChange={(e) => setOwnername(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Last Name"
                          name="lastname"
                          required=""
                          onChange={(e) => setOwnersurname(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          required=""
                          onChange={(e) => setOwnerphone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email"
                          name="email"
                          required=""
                          onChange={(e) => setOwneremail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="add-listing-form upload-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Images</h4>
                  <p>Click here or drope files to upload</p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-1.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-1.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group file-input-one">
                        <input type="file" name="Image" />
                        <div className="upload-content">
                          <div className="upload-title-icon d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/elements/input-1.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="add-listing-form amenities-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">How do want us to contact you</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input
                            type="checkbox"
                            id="whatsapp"
                            name="checkbox"
                            defaultChecked=""
                          />
                          <label htmlFor="check1">
                            <span>whatsapp</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="calls" name="checkbox" />
                          <label htmlFor="check4">
                            <span>voice calls</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="check7" name="checkbox" />
                          <label htmlFor="check7">
                            <span>SMS</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button text-center">
                  <button className="main-btn icon-btn" onClick={handleSubmit}>Submit Listing</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default AddListing;
