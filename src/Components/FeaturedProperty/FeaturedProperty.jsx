import "./FeaturedProperty.css";
import villa from "../../Assets/villa.jfif";
import hotel from "../../Assets/hotel.jfif";

const FeaturedProperty = () => {
  return (
    <div className="fpContainer">
      <h3 style={{ marginBottom: "15px" }}>Home Guests Love</h3>
      <div className="fp">
        <div className="fpCard">
          <img src={villa} alt="" className="fpImg" />
          <div className="fpCardDetails">
            <h2 className="fpName">Bashundhara</h2>
            <span className="fpCity">Dhaka</span>
            <div className="fpRating">
              <span className="fpRatingNumber">8.7</span>
              <span className="fpRatingCmnt">Fabulous</span>
              <span className="fpRatingReview">2,458 reviews</span>
            </div>
            <p className="fpPriceDetail">
              Starting from <span className="fpPrice">BDT 19,361</span>
            </p>
          </div>
        </div>
        <div className="fpCard">
          <img src={hotel} alt="" className="fpImg" />
          <div className="fpCardDetails">
            <h2 className="fpName">Bashundhara</h2>
            <span className="fpCity">Dhaka</span>
            <div className="fpRating">
              <span className="fpRatingNumber">8.7</span>
              <span className="fpRatingCmnt">Fabulous</span>
              <span className="fpRatingReview">2,458 reviews</span>
            </div>
            <p className="fpPriceDetail">
              Starting from <span className="fpPrice">BDT 19,361</span>
            </p>
          </div>
        </div>
        <div className="fpCard">
          <img src={villa} alt="" className="fpImg" />
          <div className="fpCardDetails">
            <h2 className="fpName">Bashundhara</h2>
            <span className="fpCity">Dhaka</span>
            <div className="fpRating">
              <span className="fpRatingNumber">8.7</span>
              <span className="fpRatingCmnt">Fabulous</span>
              <span className="fpRatingReview">2,458 reviews</span>
            </div>
            <p className="fpPriceDetail">
              Starting from <span className="fpPrice">BDT 19,361</span>
            </p>
          </div>
        </div>
        <div className="fpCard">
          <img src={hotel} alt="" className="fpImg" />
          <div className="fpCardDetails">
            <h2 className="fpName">Bashundhara</h2>
            <span className="fpCity">Dhaka</span>
            <div className="fpRating">
              <span className="fpRatingNumber">8.7</span>
              <span className="fpRatingCmnt">Fabulous</span>
              <span className="fpRatingReview">2,458 reviews</span>
            </div>
            <p className="fpPriceDetail">
              Starting from <span className="fpPrice">BDT 19,361</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
