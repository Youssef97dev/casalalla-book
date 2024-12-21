"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ClockLoader } from "react-spinners";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Select from "react-select";
import DatePicker from "rsuite/DatePicker";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdPerson } from "react-icons/io";
import Link from "next/link";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import "rsuite/DatePicker/styles/index.css";

const items = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/i7mqgy4ik8mhnsj6iecr",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/a0hsbjyo00f33m7s7xjh",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/lu0oa3az4uglsw5rbtcb",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/yyxizo8d8yun6olceemx",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/casa11_mypsbw",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ua80x5nvez8bkevotcf9",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/L-167_uhoybh",
];

const itemsMobile = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/g0gel0gr7eawfbrr3gzh",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ozhlnzhixzekfblvs53j",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/zdeg62pnnarojbbmb6py",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/uuzzafwgkswrsjwhwhm3",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/cribaruuifpdgsaukc83",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/wg0wo6koyy3snzsq5nao",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/casa13_b0nbad",
];

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
];

const time = [
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];

const Book = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(0);
  const [timeBook, setTimeBook] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clickBook = async () => {
    if (activeTab === 3) {
      const serviceId = "service_zk1myao";
      const templateId = "template_c262tqj";
      try {
        setLoading(true);
        const res = await emailjs.send(serviceId, templateId, {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          number_personne: numberGuests,
          date: new Intl.DateTimeFormat("en-En", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(startDate),
          time: timeBook,
          comment: formData.comment,
        });
        if (res.status === 200) {
          setMessageSent(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setActiveTab(activeTab === 1 ? 2 : 3);
    }
  };

  useEffect(() => {
    emailjs.init("1D9YARxa2KB7aQtKm");
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-[50vh] hidden lg:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            speed={1400}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-ex1",
              prevEl: ".swiper-button-prev-ex1",
            }}
            className="swiper w-full h-full"
            id="slider1"
          >
            <div className="swiper-wrapper">
              {items.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      src={`${item}`}
                      className="w-full h-full object-cover"
                      alt="itemImage"
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className="w-full h-full relative block lg:hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1400}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-ex1",
              prevEl: ".swiper-button-prev-ex1",
            }}
            className="swiper w-full h-full"
            id="slider1"
          >
            <div className="swiper-wrapper">
              {itemsMobile.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      src={`${item}`}
                      className="w-full max-h-full object-cover"
                      alt="itemImage"
                    />
                    <div
                      className="absolute z-10 top-0 left-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(to bottom, #00000063, transparent)",
                      }}
                    ></div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <div className="absolute w-full flex justify-center items-center top-3 z-20">
            <img
              src={`/logo-2.png`}
              className="w-[40%] max-h-full object-cover"
              alt="itemImage"
            />
          </div>
          <div className="absolute w-full flex flex-col gap-2 justify-center items-start left-3 text-[#ffffff] bottom-3 z-20">
            <Link
              target="_blank"
              href="mailto:reservations@casalallatakerkoust.com"
            >
              <FaSquareEnvelope size={30} className="cursor-pointer" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/casa.lalla.takerkoust"
            >
              <FaSquareInstagram size={30} className="cursor-pointer" />
            </Link>
            <Link target="_blank" href="http://wa.me/212675480018">
              <FaSquareWhatsapp size={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
        {!messageSent ? (
          <div className="w-full flex flex-col justify-center items-center gap-4 bg-[#FFFFFF] py-4 px-3 lg:px-5">
            {activeTab === 1 && (
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <strong className="text-[14px] leading-[20px] text-[#374151]">
                      Date
                    </strong>
                    <DatePicker
                      oneTap
                      placeholder="Select Date"
                      className="w-full border border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
                      value={startDate}
                      onChange={setStartDate}
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <strong className="text-[14px] leading-[20px] text-[#374151]">
                      Number of people
                    </strong>
                    <Select
                      defaultValue={options[0]}
                      options={options}
                      isSearchable={false}
                      onChange={(e) => setNumberGuests(e.value)}
                      className="w-full border border-gray-400 rounded-md outline-none text-[14px] text-[#374151] "
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                  <strong className="text-[14px] leading-[20px] text-[#374151]">
                    Time
                  </strong>
                  <div className="w-full rounded-md flex justify-start items-center gap-2 overflow-auto pb-4">
                    {time.map((value) => (
                      <div
                        key={value}
                        onClick={() => setTimeBook(value)}
                        className={`text-[14px] leading-[16px] rounded-lg px-2 py-2 lg:py-4 lg:px-4 bg-[#e5e7eb] text-[#374151] hover:bg-[#3f98a4] hover:text-white cursor-pointer ${
                          timeBook === value && "bg-[#3897a3] text-white"
                        }`}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="w-full gap-2 rounded-lg text-gray-800 border border-gray-200 flex justify-between items-center py-2 px-4 bg-[#F3F4F6] mb-4">
                  <div>
                    <strong class="text-sm">Your reservation</strong>
                    <div class="text-sm text-gray-500">
                      {new Intl.DateTimeFormat("en-En", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(startDate)}
                      {" - "}
                      {timeBook}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-1">
                      <strong>{numberGuests}</strong>
                      <IoMdPerson size={20} />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
                      <span>First name</span>
                      <span className="text-red-500">*</span>
                    </strong>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
                      <span>Last name</span>
                      <span className="text-red-500">*</span>
                    </strong>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                  <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
                    <span>Email</span>
                    <span className="text-red-500">*</span>
                  </strong>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                  <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
                    <span>Phone</span>
                    <span className="text-red-500">*</span>
                  </strong>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                  <strong className="text-[14px] leading-[20px] text-[#374151]">
                    Commentaire
                  </strong>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
                  />
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="w-full gap-2 rounded-lg text-gray-800 border border-gray-200 flex justify-between items-center py-2 px-4 bg-[#F3F4F6] mb-4">
                  <div>
                    <strong class="text-sm">Your reservation</strong>
                    <div class="text-sm text-gray-500">
                      {new Intl.DateTimeFormat("en-En", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(startDate)}
                      {" - "}
                      {timeBook}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-1">
                      <strong>{numberGuests}</strong>
                      <IoMdPerson size={20} />
                    </div>
                  </div>
                </div>
                <h1 className="text-[24px] leading-[26.4px] mr-auto text-gray-800">{`Please verify your information`}</h1>
                <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
                  <span className="w-[30%]">Date:</span>
                  <strong className="text-sm">
                    {new Intl.DateTimeFormat("en-En", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(startDate)}
                  </strong>
                </div>
                <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
                  <span className="w-[30%]">Time:</span>
                  <strong className="text-sm">{timeBook}</strong>
                </div>
                <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
                  <span className="w-[30%]">People:</span>
                  <strong className="text-sm">{numberGuests}</strong>
                </div>
                <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
                  <span className="w-[30%]">First name:</span>
                  <strong className="text-sm">{formData.firstName}</strong>
                </div>
                <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
                  <span className="w-[30%]">Last name:</span>
                  <strong className="text-sm">{formData.lastName}</strong>
                </div>
                <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
                  <span className="w-[30%]">Phone:</span>
                  <strong className="text-sm">{formData.phone}</strong>
                </div>
                <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
                  <span className="w-[30%]">Email:</span>
                  <strong className="text-sm">{formData.email}</strong>
                </div>
              </div>
            )}
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 lg:gap-36">
              <button
                type="button"
                className={`w-full text-[14px] leading-[20px] border border-gray-400 px-3 py-2 bg-[#F9FBFB] text-[#4B5563] rounded-md ${
                  activeTab === 1 ? "hidden" : ""
                }`}
                onClick={() => setActiveTab(activeTab === 3 ? 2 : 1)}
              >
                Back
              </button>
              <button
                type="button"
                className="w-full text-[14px] leading-[20px] disabled:bg-[#F3F4F6] disabled:text-[#4B5563] disabled:cursor-not-allowed border border-gray-400 px-3 py-2 bg-[#3F98A4] text-[#FFFFFF] rounded-md flex justify-center items-center"
                onClick={() => clickBook()}
                disabled={
                  activeTab === 1
                    ? numberGuests === 0 || timeBook.length === 0
                    : activeTab === 2
                    ? formData.firstName.length === 0 ||
                      formData.lastName.length === 0 ||
                      formData.email.length === 0 ||
                      formData.phone.length === 0
                    : loading
                }
              >
                {activeTab === 3 ? (
                  loading ? (
                    <ClockLoader size={20} color="#000000" />
                  ) : (
                    "Book"
                  )
                ) : (
                  "Next"
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center p-3.5 rounded text-[#00AB55] bg-[#DDF5F0] font-garamond mt-3">
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
      </div>
    )
  );
};

export default Book;
