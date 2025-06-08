import { useParams } from "react-router-dom";
import "./Hotel.css";
import { allHotels, facilities, rooms } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark, FaMapLocationDot } from "react-icons/fa6";
import { GiDoubleStreetLights } from "react-icons/gi";
import { MdPoll } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbParkingCircle } from "react-icons/tb";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

function Hotel() {

  const[open, setOpen] = useState(false)
  const[sliderNumber, setSliderNumber] = useState(0)

  const handleOpen = (i) =>{
    setSliderNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) =>{
    let newSliderNumber 
    if(direction === "i"){
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1
    }else{
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1
    }
    setSliderNumber(newSliderNumber)
  }

  const { id } = useParams();
  const hotel = allHotels.find((hotel) => hotel.id === parseInt(id));

  return (
    <div>
      <Navbar />
      <div className="hotel-container">

        {open && (
          <div className="slider">
            <FaCircleXmark className="close" onClick={() => setOpen(false)}/>
              <FaCircleArrowLeft className="arrow" onClick={() => handleMove("l")} />
                <div className="slider-wrapper">
                  <img src={rooms[sliderNumber].image} alt="" className="slider-img" />
                </div>
                <FaCircleArrowRight className="arrow" onClick={() => handleMove("r")} />
          </div>
        )}

        <div className="hotel-wrapper">
          <h1 className="hotel-title">{hotel.title}</h1>
          <div className="hotel-location">
            <FaMapLocationDot />
            <span>{hotel.location}</span>
          </div>
          <span className="hotel-distance">Excellent location - 500m from center</span>
          <span className="hotel-price">Enjoy a comfortable stay starting at ${hotel.price} per night</span>

          <div className="hotel-images">
            {rooms.map((room, i) => (
              <div key={i} className="hotel-images-wrapper">
                <img src={room.image} alt="" className="hotel-img" onClick={() => handleOpen(i)} />
              </div>
            ))}
          </div>

          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1 className="hotel-title">About this hotel</h1>
              <p>
                Grand Palace Hotel offers a luxurious stay in the heart of Mumbai with spacious rooms,
                modern amenities, and exceptional service. Whether you're traveling for business or leisure,
                enjoy comforts like free Wi-Fi, a rooftop pool, spa, gym, and on-site dining. Just minutes
                away from popular attractions, this hotel combines convenience with elegance for a memorable stay.
              </p>

              <div className="hotel-facilities">
                <h1 className="hotel-facilities-title">Hotel Facilities</h1>
                <div className="facilities">
                  {facilities.map((facilitie) => (
                    <div key={facilitie.id} className="facilitie">
                      <span className="facilitie-icon">{facilitie.icon}</span>
                      <span>{facilitie.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hotel-highlights">
              <h1>Hotel highlights</h1>
              <h4>Perfect for a 4-night stay!</h4>
              <span>
                Located to the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h4>Breakfast info</h4>
              <span>Continental, Fresh, Indulgent, Protein-packed, Savory, Gourmet</span>
              <h4>Rooms with</h4>
              <ul>
                <li>
                  <GiDoubleStreetLights />
                  Quiet street view
                </li>
                <li>
                  <MdPoll />
                  Pool with a view
                </li>
                <li>
                  <FaCity />
                  City view
                </li>
                <li>
                  <TbParkingCircle />
                  Free Parking
                </li>
              </ul>
              <button>Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hotel;
