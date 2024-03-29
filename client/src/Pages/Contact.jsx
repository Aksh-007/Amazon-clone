import React from "react";
import Layout from "../Components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="col-md-4"
          style={{ marginTop: "50px", marginLeft: "50px" }}
        >
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            "Contact us for any inquiries, feedback, or assistance regarding our
            ecommerce site. Our dedicated customer support team is here to help
            you with your orders, product inquiries, and any other concerns.
            Reach out to us to experience exceptional service and a seamless
            shopping experience."
          </p>
          <p className="mt-3">
            <BiMailSend size={"30px"} /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall size={"30px"} /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport size={"30px"} /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
