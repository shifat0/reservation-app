import "./PropertyList.css";
import { propertyImages } from "../../Assets/propertyImages";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch(
    `${process.env.REACT_APP_PROXY_URL}/hotels/count-by-type`
  );
  console.log(data);
  return (
    <div className="propertyContainer">
      <h3 style={{ marginBottom: "15px" }}>Browse By Property Type</h3>
      {loading ? (
        "Loading..."
      ) : (
        <div className="property">
          {data &&
            propertyImages.map((img, i) => (
              <div className="propertyItem" key={i}>
                <img src={img.src} alt="" className="propertyImg" />
                <div className="propertyTitles">
                  <h4 style={{ textTransform: "capitalize", fontSize: "18px" }}>
                    {data[i]?.type}
                  </h4>
                  <span style={{ color: "gray" }}>
                    {data[i]?.count} {data[i]?.type}s
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
