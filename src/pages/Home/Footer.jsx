import React from "react";
import micro from "../../assets/micro.png";
import Facebook from "../../assets/Facebook.png";
import insta from "../../assets/insta.jpg";
import inn from "../../assets/inn.png";
import utube from "../../assets/utube.jpg";
import Telegram from "../../assets/telegram.jpg";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center flex-row">
        <img src={micro} />
        <div className=" font-normal text-(--color-tint-bt2) text-4xl font-lobster">
          <p> Evenjo</p>
        </div>
      </div>

      <div className="flex gap-12 text-white text-base font-inter opacity-90">
        <div>Home</div>
        <div>Contact us</div>
        <div>About us</div>
        <div>Privacy Policy</div>
      </div>

      <div className="flex items-center justify-center flex-row max-w-md gap-6">
        <img src={Facebook} className="w-20px rounded-[50%] size-10" />
        <img src={insta} className="w-20px rounded-[50%] size-10" />
        <img src={inn} className="w-20px rounded-[50%] size-10" />
        <img src={utube} className="w-20px rounded-[50%] size-10" />
        <img src={Telegram} className="w-20px rounded-[50%] size-10" />
      </div>
      <hr className="w-[20rem] h-0.5 mx-auto border-[#FFFFFF33] border-1 rounded-sm md:my-5 " />

      <div className="flex gap-12 text-white text-base font-inter opacity-90 text-xs">
        <p>Copyright&copy;Evenjo</p>
      </div>
    </div>
  );
};

export default Footer;
