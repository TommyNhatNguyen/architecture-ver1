import Link from "next/link";
import React from "react";
import "./style.scss";
type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="sccontact" className="sccontact --ptb">
      <div className="container">
        <div className="sccontact-wrapper">
          <div className="sccontact__content">
            <h2 className="sccontact__content-title">
              Share your idea with use
            </h2>
            <Link href="mailto:info@example.com" className="btn btn-link">
              furniturue@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
