import { useContext, useState } from "react";
import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { images } from "../../Assets/Images";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";

const Hotel = () => {
  const [openSlider, setOpenSLider] = useState(false);
  const [slider, setSlider] = useState(0);
  const { id } = useParams();
  const { data, loading } = useFetch(
    `${process.env.REACT_APP_PROXY_URL}/hotels/single/${id}`
  );

  const { dates, options } = useContext(SearchContext);

  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // miliseconds per day
    return diffDays;
  };
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleSlider = (i) => {
    setOpenSLider(true);
    setSlider(i);
  };

  const handleArrow = (direction) => {
    let slidenumber;
    if (direction === "left") {
      slidenumber = slider === 0 ? 5 : slider - 1;
    } else {
      slidenumber = slider === 5 ? 0 : slider + 1;
    }
    setSlider(slidenumber);
  };

  return (
    <>
      <Navbar />
      <Header type="hotelList" />
      <div className="hotelContainer">
        {openSlider && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="sliderClose"
              onClick={() => setOpenSLider(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="sliderArrow"
              onClick={() => handleArrow("left")}
            />
            <div className="sliderWrapper">
              <img src={images[slider].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="sliderArrow"
              onClick={() => handleArrow("right")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <h1 style={{ fontSize: "26px" }}>{data.name}</h1>
          <button className="hotelBookNow">Reserve or Book now</button>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span style={{ color: "#088395", fontWeight: "500" }}>
            Excellent location - {data.distance} from center
          </span>
          <span style={{ color: "#1a5d1a", fontWeight: "500" }}>
            Book a stay over BDT {data.cheapestPrice} on this property and get a
            free airport taxi
          </span>
          <div className="hotelImages">
            {images.map((image, idx) => {
              return (
                <div className="hotelImgWrapper" key={image.id}>
                  <img
                    src={image.src}
                    alt=""
                    onClick={() => handleSlider(idx)}
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <p>{data.desc}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h3 style={{ color: "#555", fontSize: "18px" }}>
                Perfect for a {days}-night stay
              </h3>
              <span style={{ fontSize: "14px", textAlign: "justify" }}>
                Located in the real heart of Cox's Bazar. This property has an
                excellent location score of 9.8
              </span>
              <span style={{ fontWeight: "600" }}>
                <bold>BDT {days * options.room * data.cheapestPrice}</bold> (
                {days} nights)
              </span>
              <button>Reserve for a book now</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
