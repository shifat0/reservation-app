import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../Assets/Images";

const Hotel = () => {
  return (
    <>
      <Navbar />
      <Header type="hotelList" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 style={{ fontSize: "26px" }}>Grand Hotel</h1>
          <button className="hotelBookNow">Reserve or Book now</button>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Cox's Bazar Sughondha Point</span>
          </div>
          <span style={{ color: "#088395", fontWeight: "500" }}>
            Excellent location - 500m from center
          </span>
          <span style={{ color: "#1a5d1a", fontWeight: "500" }}>
            Book a stay over BDT 19,786 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {images.map((image) => {
              return (
                <div className="hotelImgWrapper" key={image.id}>
                  <img src={image.src} alt="" />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <p>
                Located in Cox's Bazar, Saint Martin Resort offers a terrace.
                Among the facilities of this property are a restaurant, room
                service and a 24-hour front desk, along with free WiFi
                throughout the property. The hotel features family rooms. At the
                hotel, each room is equipped with a desk, a flat-screen TV, a
                private bathroom, bed linen and towels. Guests at Saint Martin
                Resort can enjoy an à la carte breakfast. The nearest airport is
                Cox's Bazar Airport, 5 km from the accommodation. Distance in
                property description is calculated using © OpenStreetMap
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h3 style={{ color: "#555", fontSize: "18px" }}>
                Perfect for a 9-night stay
              </h3>
              <span style={{ fontSize: "14px", textAlign: "justify" }}>
                Located in the real heart of Cox's Bazar. This property has an
                excellent location score of 9.8
              </span>
              <span style={{ fontWeight: "600" }}>
                <bold>BDT 18,978</bold> (9 nights)
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
