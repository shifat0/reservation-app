import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import "./HotelList.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SearchItem/SearchItem";

const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
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
              <input type="text" name="" placeholder={destination} />
            </div>
            <div className="hlsItem">
              <label>Date</label>
              <input
                type="text"
                name=""
                onClick={() => setOpenDate(!openDate)}
                placeholder={`${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              />
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
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
                  <input type="number" name="" min={0} />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">
                    Max Price <small>(per night)</small>
                  </span>
                  <input type="number" name="" min={0} />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">Adult</span>
                  <input
                    type="number"
                    name=""
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">Children</span>
                  <input
                    type="number"
                    name=""
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="hlsOptionItem">
                  <span className="hlsOptionText">Room</span>
                  <input
                    type="number"
                    name=""
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="hlResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
