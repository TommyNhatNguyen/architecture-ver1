import React from "react";
import "./style.scss";
type Props = {};

const About = (props: Props) => {
  return (
    <section id="scabout" className="scabout --ptb">
      <div className="container">
        <div className="scabout-wrapper">
          <div className="scabout__left">
            <h2 className="scabout__left-title">About</h2>
            <p className="scabout__left-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam facere velit vel consectetur aut similique doloremque
              tempora ex hic ad suscipit, tenetur quos obcaecati est iste sunt
              aperiam, dicta totam.
            </p>
            <div className="scabout__left-thumbnail">
              <img src="/images/founder-1.jpg" alt="About" />
            </div>
          </div>
          <div className="scabout__right">
            <p className="scabout__right-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              mollitia, magnam earum officia quo animi iure fugit velit
              cupiditate itaque laboriosam, sit libero alias facere! Quisquam
              nostrum iste dolorum quidem.
            </p>
            <div className="scabout__right-thumbnail">
              <img src="/images/founder-2.jpeg" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
