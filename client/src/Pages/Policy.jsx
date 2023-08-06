import Layout from "../Components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At Ecommerce App, we take your privacy seriously. We are committed
            to protecting your personal information and ensuring its
            confidentiality. We collect only essential data required to process
            your orders, provide customer support, and improve our services.
            Your information will never be shared, sold, or disclosed to third
            parties without your consent, except when necessary to complete
            transactions or comply with legal requirements. We use secure
            technologies to safeguard your data and maintain the highest
            security standards. By using our platform, you agree to our Privacy
            Policy. For any concerns or queries regarding your privacy, please
            contact us at :<br />
            <span className="fw-bold">
              {" "}
              Email - akshaybarapatre54@gmail.com
              <br />
              phone - 7768940852
            </span>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Policy;
