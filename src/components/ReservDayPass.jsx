"use client";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const selectTime = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
];

const ReservDayPass = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [datePass, setDatePAss] = useState(new Date());
  const [numberPerson, setNumberPerson] = useState(2);
  const [selectedTime, setSelectedTime] = useState("Aucune heure sélectionnée");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-[80%] flex flex-col justify-center items-center bg-white p-2">
      <div className="w-full">
        <div className="w-full">
          {activeTab === 1 && (
            <div className="w-full flex flex-col justify-center items-center gap-3">
              <div className="w-full flex flex-row justify-center items-center text-primary_11 gap-2">
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <FaCalendarAlt size={18} />
                  <span>{`${datePass.getDate()}/${
                    datePass.getMonth() + 1
                  }/${datePass.getFullYear()}`}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <IoPerson size={18} />
                  <span>{numberPerson}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <MdOutlineWatchLater size={18} />
                  <span>{selectedTime}</span>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1 px-3">
                <strong className="text-primary_11 ">
                  Nombre de personnes
                </strong>
                <div className="w-full flex justify-center items-center">
                  <select
                    onChange={(e) => setNumberPerson(e.target.value)}
                    className="w-full text-primary_11 px-3 py-3 rounded-l-md rounded-r-none bg-[#efe2bd] outline-none"
                  >
                    <option value="2"></option>
                    {numbers.map((value) => (
                      <option key={value} value={`${value}`}>
                        {value}
                      </option>
                    ))}
                  </select>
                  <div className="bg-[#efe2bd] text-primary_11 flex justify-center items-center rounded-r-md py-2 px-3 border border-l-0 border-white-light">
                    <IoPerson size={24} />
                  </div>
                </div>
              </div>
              <Calendar
                onChange={setDatePAss}
                value={datePass}
                className="!w-full  !px-3 !border-none"
              />
              <div className="w-full flex flex-col justify-center items-start gap-1 px-3">
                <strong className="text-primary_11 ">Heure</strong>
                <div className="w-full flex justify-center items-center">
                  <select
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full text-primary_11 px-3 py-3 rounded-l-md rounded-r-none bg-[#efe2bd] outline-none"
                  >
                    <option value="11:00">{`Reservation for Day pass and 3 course lunch`}</option>
                    {selectTime.map((value) => (
                      <option key={value} value={`${value}`}>
                        {value}
                      </option>
                    ))}
                  </select>
                  <div className="bg-[#efe2bd] text-primary_11 flex justify-center items-center rounded-r-md py-2 px-3 border border-l-0 border-white-light">
                    <MdOutlineWatchLater size={25} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          {activeTab === 2 && (
            <div className="w-full flex flex-col justify-center items-center gap-3">
              <div className="w-full flex flex-row justify-center items-center text-primary_11 gap-2">
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <FaCalendarAlt size={18} />
                  <span>{`${datePass.getDate()}/${
                    datePass.getMonth() + 1
                  }/${datePass.getFullYear()}`}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <IoPerson size={18} />
                  <span>{numberPerson}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <MdOutlineWatchLater size={18} />
                  <span>{selectedTime}</span>
                </div>
              </div>
              <h1 className="text-[24px] leading-[26.4px] mr-auto text-primary_11">{`Détails Clients`}</h1>
              <div className="w-full flex justify-center items-center gap-3">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Prénom"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
              </div>
              <div className="w-full flex justify-center items-center gap-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="phone"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mb-5">
          {activeTab === 3 && "Wonderful transition effects."}
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <button
          type="button"
          className={`px-3 py-1 bg-primary_11 text-white rounded ${
            activeTab === 1 ? "hidden" : ""
          }`}
          onClick={() => setActiveTab(activeTab === 3 ? 2 : 1)}
        >
          Précédent
        </button>
        <button
          type="button"
          className="px-3 py-1 bg-primary_11 text-white rounded ml-auto"
          onClick={() => setActiveTab(activeTab === 1 ? 2 : 3)}
        >
          {activeTab === 3 ? "Finish" : "Suivant"}
        </button>
      </div>
    </div>
  );
};

export default ReservDayPass;
