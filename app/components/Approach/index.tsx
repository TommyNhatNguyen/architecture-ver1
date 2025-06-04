import React from "react";
import "./style.scss";
type Props = {};

const Approach = (props: Props) => {
  return (
    <section id="scapproach" className="scapproach --ptb">
      <div className="container">
        <div className="scapproach__top">
          {/* Content */}
          <div className="scapproach__top-content">
            <h2 className="title">Our approach</h2>
            <p className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos placeat illum nisi facere explicabo culpa, officia
              unde, minus facilis iusto, doloribus eos quidem asperiores
              distinctio voluptatum laborum sint vel. Natus! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Earum, ratione pariatur
              perferendis dolorum, consectetur veniam deleniti illum similique
              hic sequi laborum mollitia autem amet possimus illo, architecto
              enim explicabo inventore.
            </p>
          </div>
          {/* Thumbnail */}
          <div className="scapproach__top-thumbnail">
            <img src="/images/about-1.jpg" alt="Approach" />
          </div>
        </div>
        <div className="scapproach__middle">
          {/* Thumbnail */}
          <div className="scapproach__middle-thumbnail">
            <img src="/images/about-2.jpg" alt="Approach" />
          </div>
          {/* Content */}
          <div className="scapproach__middle-content">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              tempora corporis amet blanditiis sapiente, nesciunt, possimus
              facere unde soluta suscipit esse, magnam repellendus sit
              voluptatibus id molestiae vero iusto culpa!
            </h3>
          </div>
          {/* Thumbnail */}
          <div className="scapproach__middle-thumbnail">
            <img src="/images/about-3.jpg" alt="Approach" />
          </div>
        </div>
        <div className="scapproach__bottom">
          <div className="scapproach__bottom-item">
            <span className="num">1</span>
            <div className="content">
              <h4 className="content__title">Share your idea</h4>
              <p className="content__para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus cupiditate et rem voluptatum quas perferendis
                exercitationem fuga iste, repellendus fugiat similique veritatis
                a debitis dolorum aut dignissimos odit! Voluptatem, provident?
              </p>
              <div className="content__img">
                <img src="/images/idea-1.webp" alt="Approach" />
              </div>
            </div>
          </div>
          <div className="scapproach__bottom-item">
            <span className="num">2</span>
            <div className="content">
              <h4 className="content__title">Survey</h4>
              <p className="content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                exercitationem! Voluptate rem ducimus libero natus ipsa, atque
                neque facere fugiat quos quaerat cumque deleniti, beatae,
                molestias aspernatur. Repudiandae, laboriosam modi.
              </p>
              <div className="content__img">
                <img src="/images/idea-2.jpeg" alt="Approach" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
