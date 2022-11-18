import React,{useState} from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { collection, addDoc, } from "firebase/firestore"
import { fireStore , storage} from "../src/firebase"
import { async } from "@firebase/util";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { useRouter } from "next/router";


const Apply = () => {

    const router = useRouter()
    const {id} = router.query
  
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [contactmethods, setContactmethods] = useState([])
  

  const handleSubmit = () => {
    try{
      const application=  addDoc(collection(fireStore, "applications"), {
        applicantname: fname,
        applicantsurname: lname,
        applicantemail: email,
        applicantphone: phone,
        propertyid: id,
      })
      alert("Your Application has been submitted, we will contact you shortly");
      router.push("/")

    }catch(error){
      alert("Error adding document: ", error);
      console.log(error)
    }

  }

  return (
    <Layout>
        <section
        className="page-breadcrumbs page-breadcrumbs-two bg_cover"
        style={{
          backgroundImage: "url(assets/images/hero/rr.png)",
        }}
      />
      <section className="fioxen-add-listing pt-120 pb-120">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form details-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Please enter your Details</h4>
                  <div className="row">

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="First Name"
                          name="name"
                          required=""
                          onChange={(e) => setFname(e.target.value)}
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
                          onChange={(e) => setLname(e.target.value)}
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
                          onChange={(e) => setPhone(e.target.value)}
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
                          onChange={(e) => setEmail(e.target.value)}
                        />
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
                          <label htmlFor="whatsapp">
                            <span>whatsapp</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="calls" name="checkbox" />
                          <label htmlFor="calls">
                            <span>voice calls</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form_group">
                        <div className="single-checkbox d-flex">
                          <input type="checkbox" id="sms" name="checkbox" />
                          <label htmlFor="sms">
                            <span>SMS</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button text-center">
                  <button className="main-btn icon-btn" onClick={handleSubmit}>Submit Application</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default Apply;
