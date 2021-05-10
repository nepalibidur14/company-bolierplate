import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid ">
        <div className="row pt-2 text-center">
          <div className="col-md-6">
            <img
              className="mb-4"
              src="./myCompany.jpeg"
              alt="Company Logo"
              height="70px"
            />
            <p>
              <h5 className="text-white">Our Location at</h5>
              Kritipur, Kathmandu, Nepal
              <br />
              Email: nepalibidur14@gmail.com
              <br />
              Contact: 9816652526 <br />
              <br />
            </p>
          </div>
          <div className="col-md-6">
            <h2>Find Us Here</h2>
            <iframe
              width="90%"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28268.776948676197!2d85.25625430461157!3d27.66793390824065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1812d78377ef%3A0x8c37cded908543b!2sKirtipur%2044600!5e0!3m2!1sen!2snp!4v1620615526876!5m2!1sen!2snp"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="col-12 text-center pt-5 ">
        <h6>
          © {new Date().getFullYear()}| All Rights Reserved | Created by: Bidur
          Nepali{" "}
        </h6>
      </div>
    </footer>
    // <div className="text-center bg-dark p-2 text-light">
    //   <h6>
    //     © {new Date().getFullYear()}| All Rights Reserved | Created by: Bidur
    //     Nepali
    //   </h6>
    // </div>
  );
};

export default Footer;
