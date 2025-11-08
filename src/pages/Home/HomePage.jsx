import React, { useState } from "react";
import HomeBac from "../../assets/HomeBac.jpg";
import NavBar from "./NavBar.jsx";
import {
  AttractionsOutlined,
  FitnessCenterOutlined,
  TheaterComedyOutlined,
  AudiotrackOutlined,
  WidgetsOutlined,
  FmdGoodOutlined,
  CalendarMonthOutlined,
  BookmarkBorderOutlined,
  ConfirmationNumberOutlined,
  CelebrationOutlined,
} from "@mui/icons-material";
import Magnifer from "../../assets/Magnifer.svg";
import { Icon } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className=" max-w-screen flex flex-col gap-4 justify-center">
        <div
          className="relative min-w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: `url(${HomeBac})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 w-[195rem]] h-[30rem] top2/2 left-1/2 
           -translate-x-1/2 -translate-y-1/2 rounded-full 
           bg-[radial-gradient(circle,_#8E24AA_35%,_rgba(0,0,0,0)_70%)] blur-[290px]"
          ></div>

          <div
            className="flex flex-col z-10 mt-40 px-4 w-full max-w-6xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              What <span className="text-[#D580F2]">Concert</span> would
              <br /> you like to go to?
            </h1>
            <div className="text-2xl text-white sm:text-base md:text-lg">

              More than 100 concerts in different countries are now available to
              you.

            </div>
          </div>

          <div
            className="flex flex-col gap-5 p-4 sm:p-6 rounded-[21px] w-[90%] sm:w-full max-w-5xl mx-auto text-white mt-12 text-xl bg-[#1B1B1BCC] border border-[#303030] z-10"
            style={{ marginTop: "90px" }} >
            <div className="w-full px-2 sm:px-4" style={{ marginTop: "5px" }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-4 text-xl">
                {[
                  { icon: AudiotrackOutlined, text: "Concerts" },
                  { icon: TheaterComedyOutlined, text: "Shows" },
                  { icon: FitnessCenterOutlined, text: "Sports" },
                  { icon: AttractionsOutlined, text: "Festivals" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="flex justify-center items-center gap-2 h-10 sm:h-12 px-4 sm:px-5 rounded-full border-2 border-transparent hover:border-purple-500 hover:text-purple-500 transition text-xs sm:text-sm md:text-base"
                  >
                    <Icon component={item.icon} fontSize="small" />
                    <span>{item.text}</span>
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-[#303030] mb-2 sm:mb-4" />

            <div className="px-1 sm:px-8" style={{ marginTop: "-30px" }}>
              <div
                className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_auto] sm:gap-6 items-center mt-2 sm:mt-4"
              >
                <div
                  className="flex items-center justify-start h-14 sm:h-16 px-2 sm:px-3"
                  style={{ marginLeft: "20px" }}
                >
                  <Icon
                    component={WidgetsOutlined}
                    fontSize="large"
                    className="text-gray-400"
                  />
                  <div>
                    <div className="text-base sm:text-lg leading-none">
                      What
                    </div>
                    <div
                      className="text-gray-400 text-xs sm:text-sm leading-tight"
                      style={{ marginLeft: "5px" }}
                    >
                      Event Type
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-3 border-t sm:border-t-0 sm:border-l border-[#303030] pl-0 sm:pl-6 h-14 sm:h-16 px-2 sm:px-3">
                  <Icon
                    component={FmdGoodOutlined}
                    fontSize="large"
                    className="text-gray-400"
                  />
                  <div>
                    <div className="text-base sm:text-lg leading-none">
                      Where
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm leading-tight">
                      Location
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-3 border-t sm:border-t-0 sm:border-l border-[#303030] pl-0 sm:pl-6 h-14 sm:h-16 px-2 sm:px-3">
                  <Icon
                    component={CalendarMonthOutlined}
                    fontSize="large"
                    className="text-gray-400"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="When Date"
                      value={selectedDate}
                      onChange={(newValue) => setSelectedDate(newValue)}
                      slotProps={{
                        textField: {
                          InputLabelProps: { style: { color: "white" } },
                          InputProps: {
                            style: { color: "white" },
                            sx: { "& .MuiSvgIcon-root": { color: "white" } },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </div>

                <div className="flex justify-center sm:justify-end">
                  <button
                    className="w-10 h-10 sm:w-14 sm:h-14 bg-[#C14FE6] hover:bg-purple-600 text-white rounded-lg transition flex items-center justify-center"
                    style={{ marginRight: "40px" }}
                  >
                    <img src={Magnifer} alt="search" className="w-5 sm:w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm mt-8 sm:mt-10 z-10 w-[90%] sm:w-auto"
            style={{ marginTop: "15px" }}
          >
            <button className="flex justify-center sm:justify-start items-center gap-2 hover:text-white transition">
              <Icon component={BookmarkBorderOutlined} /> Book Anytime
            </button>
            <button className="flex justify-center sm:justify-start items-center gap-2 hover:text-white transition">
              <Icon component={ConfirmationNumberOutlined} /> Refundable Tickets
            </button>
            <button className="flex justify-center sm:justify-start items-center gap-2 hover:text-white transition">
              <Icon component={CelebrationOutlined} /> Smart Deals
            </button>
          </div>
        </div>
      </div>
    </>
  );
}