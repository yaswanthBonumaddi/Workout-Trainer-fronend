import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coverPic from "../assets/icons/gym.png";
import left from "../assets/icons/left-arrow.png";
import right from "../assets/icons/right-arrow.png";
import { styled } from "styled-components";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const bodyParts = this.props.bodyParts;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Container>
        <ul className="slick-container">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {bodyParts.map((each) => {
              return (
                <li
                  onClick={() =>
                    this.props.setSelectedbodypart(each.toLowerCase())
                  }
                  key={each}
                >
                  <div className="slick-item bodyPart-card">
                    <img
                      src={coverPic}
                      className="slick-item-cover-pic"
                      alt="title"
                    />
                    <h1 className="bodypartcart-title">{each}</h1>
                  </div>
                </li>
              );
            })}
          </Slider>
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "30px",
          }}
        >
          <div style={{ textAlign: "right", display: "flex" }}>
            <button className="left-arrow" onClick={this.previous}>
              <img src={left} alt="prev" />
            </button>
            <button className="right-arrow" onClick={this.next}>
              <img src={right} alt="next" />
            </button>
          </div>
        </div>
      </Container>
    );
  }
}
const Container = styled.div`
  .slick-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    margin: 10px;
    background-color: #fff;
  }

  @media screen and (max-width: 568px) {
    .slick-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 150px;
      margin: 10px;
      background-color: #fff;
    }
  }
`;
