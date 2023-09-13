import "./PropertyList.css";
import villa from "../../Assets/villa.jfif";
import hotel from "../../Assets/hotel.jfif";

const PropertyList = () => {
  return (
    <div className="propertyContainer">
      <h3 style={{ marginBottom: "15px" }}>Browse By Property Type</h3>
      <div className="property">
        <div className="propertyItem">
          <img src={hotel} alt="" className="propertyImg" />
          <div className="propertyTitles">
            <h4>Hotels</h4>
            <span>hotels</span>
          </div>
        </div>
        <div className="propertyItem">
          <img src={hotel} alt="" className="propertyImg" />
          <div className="propertyTitles">
            <h4>Apartments</h4>
            <span>Apartments</span>
          </div>
        </div>
        <div className="propertyItem">
          <img src={hotel} alt="" className="propertyImg" />
          <div className="propertyTitles">
            <h4>Resorts</h4>
            <span>resorts</span>
          </div>
        </div>
        <div className="propertyItem">
          <img src={villa} alt="Villa" className="propertyImg" />
          <div className="propertyTitles">
            <h4>Villas</h4>
            <span>villas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
