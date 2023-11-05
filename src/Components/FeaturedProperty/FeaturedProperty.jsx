import "./FeaturedProperty.css";
import villa from "../../Assets/villa.jfif";
import useFetch from "../../hooks/useFetch";

const FeaturedProperty = () => {
  const { data, loading } = useFetch(
    `${process.env.REACT_APP_PROXY_URL}/hotels?featured=true&limit=4`
  );
  return (
    <div className="fpContainer">
      <h3 style={{ marginBottom: "15px" }}>Home Guests Love</h3>
      <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <div className="fpCard">
                <img src={villa} alt="" className="fpImg" />
                <div className="fpCardDetails">
                  <h2 className="fpName">{item.name}</h2>
                  <span className="fpCity">{item.city}</span>
                  {item.rating && (
                    <div className="fpRating">
                      <span className="fpRatingNumber">8.7</span>
                      <span className="fpRatingCmnt">Fabulous</span>
                      <span className="fpRatingReview">2,458 reviews</span>
                    </div>
                  )}
                  <p className="fpPriceDetail">
                    Starting from{" "}
                    <span className="fpPrice">BDT {item.cheapestPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperty;
