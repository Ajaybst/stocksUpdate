import React from "react";
import "./global.css";
let Contact = () => {
  return (
    <>
      <div className="contactParent">
        <section className="contactSection">
          <div className="myInfoDiv">
            <h1>CONTACT US</h1>
            <p style={{ letterSpacing: "2px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              eius ut aliquam eum modi. Laboriosam delectus sequi deserunt sunt
              vero consequatur aspernatur repellat. Iusto doloribus quae
              excepturi quidem error quis.
            </p>
            <h3>E-mail: xyzabc@gmail.com</h3>
            <h3>Phone:9876543210 </h3>
            <textarea
              className="textarea"
              placeholder="Write your queries here"
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <button>Submit</button>
            <h6>
              Note:
              <ul>
                <li>Less than 12-hours response to your question</li>
                <li>Expertise of a certified speaciliest</li>
                <li>plan of action summrised in Email</li>
              </ul>
            </h6>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
