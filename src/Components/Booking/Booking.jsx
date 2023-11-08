import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./booking.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booking = ({ setModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading } = useFetch(
    `${process.env.REACT_APP_PROXY_URL}/hotels/rooms/${hotelId}`
  );
  const { dates } = useContext(SearchContext);

  const getRangeOfDates = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const date = new Date(startDate.getTime());

    let dates = [];
    while (date <= endDate) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  const bookedDates = getRangeOfDates(dates[0].startDate, dates[0].endDate);

  const availableDates = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      bookedDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((room) => room !== value)
    );
  };

  const navigate = useNavigate();
  const handleBook = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `${process.env.REACT_APP_PROXY_URL}/rooms/availability/${roomId}`,
            { dates: bookedDates }
          );
          setModal(false);
          navigate("/");
          return res.data;
        })
      );
    } catch (err) {
      return err.message;
    }
  };

  return (
    <div className="booking">
      {loading ? (
        "Loading"
      ) : (
        <div className="bookingContainer">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="modalClose"
            onClick={() => setModal(false)}
          />
          <span>Select your rooms: </span>
          {data.map((room) => (
            <div className="room" key={room._id}>
              <div className="roomInfo">
                <div className="roomTitle">{room.title}</div>
                <div className="roomDesc">{room.desc}</div>
                <div className="roomMax">Max People: {room.maxPeople}</div>
                <div className="roomPrice">
                  Price: <span>BDT {room.price}</span>
                </div>
              </div>
              <div className="selectRooms">
                {room.roomNumbers.map((number) => (
                  <div className="roomNumbers" key={number._id}>
                    <label>{number.number}</label>
                    <input
                      type="checkbox"
                      value={number._id}
                      onChange={(e) => handleSelect(e)}
                      disabled={!availableDates(number)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleBook}>Book Now!</button>
        </div>
      )}
    </div>
  );
};

export default Booking;
