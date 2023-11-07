import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import "./HotelList.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const HotelList = () => {
  const location = useLocation();
  // receiveing states passed from Header Component
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const { data, loading, reFetch } = useFetch(
    `${process.env.REACT_APP_PROXY_URL}/hotels?city=${destination}&min=${min}&max=${max}`
  );

  const handleSearch = () => {
    reFetch();
  };
  console.log(options);
  const handleOptions = (e, name) => {
    setOptions((prev) => {
      return { ...prev, [name]: +e.target.value };
    });
  };

  return (
    <>
      <Navbar />
      <Header type="hotelList" />
      <div className="hlContainer">
        <div className="hlWrapper">
          <div className="hlSearch">
            <h1 className="hlsTitle">Search</h1>
            <div className="hlsItem">
              <label>Destination</label>
              <input
                type="text"
                onChange={(e) => setDestination(e.target.value)}
                placeholder={destination}
              />
            </div>
            <div className="hlsItem">
              <label>Date</label>
              <input
                type="text"
                name=""
                onClick={() => setOpenDate(!openDate)}
                placeholder={`${format(
                  dates[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
              />
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="hlsItem">
              <label>Options</label>
              <div className="hlsOption">
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">
                    Min Price <small>(per night)</small>
                  </span>
                  <input
                    type="number"
                    placeholder={min}
                    onChange={(e) => setMin(e.target.value)}
                    min={0}
                  />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">
                    Max Price <small>(per night)</small>
                  </span>
                  <input
                    type="number"
                    placeholder={max}
                    onChange={(e) => setMax(e.target.value)}
                    min={10}
                  />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">Adult</span>
                  <input
                    type="number"
                    onChange={(e) => handleOptions(e, "adult")}
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">Children</span>
                  <input
                    type="number"
                    onChange={(e) => handleOptions(e, "children")}
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">Room</span>
                  <input
                    type="number"
                    onChange={(e) => handleOptions(e, "room")}
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="hlResult">
            <SearchItem hotels={data} loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
