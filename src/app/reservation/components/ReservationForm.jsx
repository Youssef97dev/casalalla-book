"use client";
import { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { ClockLoader } from "react-spinners";
import "flatpickr/dist/flatpickr.css";

const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numberPerson: 2,
  });
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [date2, setDate2] = useState(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    emailjs.init("1D9YARxa2KB7aQtKm");
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_zk1myao";
    const templateId = "template_c262tqj";
    try {
      setLoading(true);
      const res = await emailjs.send(serviceId, templateId, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        number_personne: formData.numberPerson,
        date: new Date(date2).toISOString().split("T")[0],
        time: new Date(date2).toISOString().split("T")[1].split("Z")[0],
      });
      if (res.status === 200) {
        setMessageSent(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setFormData({
        ...formData,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateReservation: new Date(),
        numberPerson: 2,
      });
    }
  };

  return (
    isClient && (
      <>
        {!messageSent ? (
          <form
            onSubmit={handleSubmit}
            className="z-20 rounded-lg relative w-full  flex flex-col justify-center items-center gap-5 font-mulish"
          >
            <div className="w-full rounded  flex flex-col justify-center items-center bg-white shadow-xl px-5 py-3 gap-3 text-sm">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Fisrt Name"
                  required
                  className="w-full border-b border-black placeholder:text-gray-500 bg-[#0000001c] p-2 outline-none text-black"
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full border-b border-black placeholder:text-gray-500 bg-[#0000001c] p-2 outline-none text-black"
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                  className="w-full border-b border-black placeholder:text-gray-500 bg-[#0000001c] p-2 outline-none text-black"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  required
                  className="w-full border-b border-black placeholder:text-gray-500 bg-[#0000001c] p-2 outline-none text-black"
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3">
                <Flatpickr
                  data-enable-time
                  options={{
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    position: "auto left",
                  }}
                  value={date2}
                  className="w-full border-b border-black bg-[#0000001c] p-2 outline-none text-black"
                  onChange={(date2) => setDate2(date2)}
                />
                <select
                  onChange={handleChange}
                  name="numberPerson"
                  className="w-full border-b border-black bg-[#0000001c] p-[9px] outline-none text-black"
                >
                  <option value="2">2</option>
                  {numbers.map((value) => (
                    <option key={value} value={`${value}`}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                <button
                  type="submit"
                  className="lg:w-[15%] w-full ml-auto bg-black disabled:bg-gray-500 text-white flex justify-center items-center py-2 px-4 rounded cursor-pointer"
                  disabled={loading}
                >
                  {loading ? (
                    <ClockLoader size={20} color="#000000" />
                  ) : (
                    "Reserve"
                  )}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="w-full flex items-center p-3.5 rounded text-[#00AB55] bg-[#DDF5F0] font-garamond">
            <span className="pr-2">
              <strong className="mr-1">Success!</strong>Thank you for your
              reservation.
            </span>
            <Link
              href="https://casalallatakerkoust.com/"
              className="ml-auto bg-[#00AB55] text-[#DDF5F0] rounded hover:opacity-80 px-3 py-1"
            >
              Home
            </Link>
          </div>
        )}
      </>
    )
  );
};

export default ReservationForm;
