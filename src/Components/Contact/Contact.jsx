import React from "react";
import "./contact.css";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaClock, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "../../config";


function Contact() {
  let formik = useFormik({
    initialValues: {
      name: "",
      contactNo: "",
      companyName: "",
      position: "",
      mailid: "",
      address: "",
      message: "",
      subject: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Please enter your Name";
      }
      if (!values.companyName) {
        errors.companyName = "Please enter your Company Name";
      }
      if (!values.mailid) {
        errors.mailid = "Please enter your Mailid";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        let res = await axios.post(`${config.api}/api/mail/message`,values)
        alert(res.data.message)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
  });
  return (
    <div className="contact" style={{ overflow: "hidden" }} id="contact">
      <div className="contactContainer">
        <div className="contactHead">
          <h2>Contact Us</h2>
        </div>
        <div className="contactContent">
          <div className="contactLeft">
            <div className="contactIconWrapper">
              <ImLocation className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>Our Office Address</h2>
                <p>88, West Colony, Dt, Komarapalayam, Tamil Nadu 638183</p>
              </div>
            </div>
            <div className="contactIconWrapper">
              <GrMail className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>General Enquiries</h2>
                <p>vijay@vktfabs.com</p>
              </div>
            </div>
            <div className="contactIconWrapper">
              <FiPhoneCall className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>Call Us</h2>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contactIconWrapper">
              <FaClock className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>Our Timing</h2>
                <p>Mon - Sun : 09:00 AM - 07:00 PM</p>
              </div>
            </div>
          </div>
          <form className="contactRight" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              className="contactField"
              placeholder="Your Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              style={formik.errors.name ? { borderColor: "red" } : null}
            />

            <input
              type="text"
              className="contactField"
              placeholder="Your Company Name"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              style={formik.errors.companyName ? { borderColor: "red" } : null}
            />

            <input
              type="text"
              className="contactField"
              placeholder="Position"
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              placeholder="Your Email"
              className="contactField"
              name="mailid"
              value={formik.values.mailid}
              onChange={formik.handleChange}
              style={formik.errors.mailid ? { borderColor: "red" } : null}
            />

            <input
              type="text"
              placeholder="Your Contact No"
              className="contactField"
              name="contactNo"
              value={formik.values.contactNo}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              className="contactField"
              placeholder="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              className="contactField"
              placeholder="Subject"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
            <textarea
              type="textarea"
              placeholder="Your Message"
              className="contactField"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=VKT Fabs, 88, West Colony, Dt, Komarapalayam, Tamil Nadu 638183&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://mcpenation.com/">https://mcpenation.com</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footContainer">
          <AiFillInstagram
            className="fooIcon"
            onClick={() =>
              window.open("https://www.instagram.com/vktfabs/", "_blank")
            }
          />
          <FaLinkedin
            className="fooIcon"
            onClick={() =>
              window.open("https://www.linkedin.com/company/vktfabs/", "_blank")
            }
          />
          <IoLogoWhatsapp
            className="fooIcon"
            onClick={() => window.open("https://wa.me/+919876543210")}
          />
          <IoMdMail
            className="fooIcon"
            onClick={() => window.open("mailto:vijay@vktfabs.com")}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
