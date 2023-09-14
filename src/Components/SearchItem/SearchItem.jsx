import "./SearchItem.css";
import hotelList from "../../Assets/hotelList.jfif";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={hotelList} alt="" className="siImg" />
      <div className="siDesc">
        <h2 style={{ color: " #088395" }}>Tower Street Apartments</h2>
        <span>500m from center</span>
        <span className="siDescTaxi">Free airport taxi</span>
        <span style={{ fontWeight: "bold" }}>
          Studio Apartment with Air Conditioning
        </span>
        <span>Enter studio • 1 bathroom • 21m² 1 full bed</span>
        <span style={{ color: "#1a5d1a", fontWeight: "bold" }}>
          Free Cancelation
        </span>
        <span style={{ color: "#1a5d1a" }}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailsRating">
          <span style={{ fontWeight: "600" }}>Excellent</span>
          <span className="siDetailsRatingNumber">8.7</span>
        </div>
        <div className="siDetailsTag">
          <span className="siDetailsTagPrice">BDT 19,784</span>
          <span className="siDetailsTagFee">Includes taxes and fees</span>
          <button>Check Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
