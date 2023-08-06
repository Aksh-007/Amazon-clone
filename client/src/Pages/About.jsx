import Layout from "../Components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Ecommerce App is a leading ecommerce platform committed to
            delivering a seamless shopping experience. Our diverse range of
            high-quality products caters to the needs of customers worldwide.
            With user-friendly navigation, secure payment options, and efficient
            order processing, we prioritize customer satisfaction. Our dedicated
            customer support team ensures prompt assistance and resolves queries
            promptly. We value your privacy and employ robust security measures
            to protect your personal information. From trendy fashion to
            cutting-edge electronics, our platform offers the best deals and
            discounts. Trust [Company Name] for a reliable, convenient, and
            enjoyable shopping journey, as we continually strive to exceed
            expectations.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
