import refundImg from "../../assets/img/ability img/return-on-investment_5950014 (Traced).png";
import hotdealImg from "../../assets/img/ability img/badge_9886290 1 (Traced).png";
import clockImg from "../../assets/img/ability img/service-24-hour_17845784 1 (Traced).png";
import vector1 from "../../assets/img/ability img/vector 1.png";
import vector2 from "../../assets/img/ability img/vector 3.png";
import vector3 from "../../assets/img/ability img/Vector (2).png";

export default function Ability() {
  return (
    <section className="max-w-[1200px] mx-auto ">
      <div className="grid grid-cols-6 gap-6">
        <div className="flex flex-col col-span-3 gap-6">
          <div className="relative rounded-2xl border bg-gradient-to-r from-shade-ws4 border-neutral-n700 bg-neutral-n1000">
            <div>
              <img
                src={vector3}
                alt=""
                className="absolute  w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative flex items-center gap-6 p-6 md:p-8">
              <img
                src={refundImg}
                alt="Refundable"
                className="w-28 md:w-36 lg:w-40 opacity-90"
              />
              <div className="text-center flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-n100">
                  Refundable <span className="text-primaryMain">Tickets</span>
                </h3>
                <p className="mt-2 text-sm text-neutral-n200 max-w-[34ch] mx-auto leading-relaxed">
                  You can pay a ticket in 2 portions throughout a fixed period
                  of time. Start invoicing for free.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border  border-neutral-n700 bg-neutral-n1000">
            <div className=" bg-gradient-to-r from-shade-ws4 absolute inset-0 pointer-events-none">
              <img
                src={vector2}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            </div>
            <div className=" relative flex items-center gap-6 p-6 md:p-8">
              <img
                src={hotdealImg}
                alt="Smart Deals"
                className="w-28 md:w-36 lg:w-40 opacity-90"
              />
              <div className="text-center flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-n100">
                  Smart <span className="text-primaryMain">Deals</span>
                </h3>
                <p className="mt-2 text-sm text-neutral-n200 max-w-[34ch] mx-auto leading-relaxed">
                  You can pay a ticket in 2 portions throughout a fixed period
                  of time. Start invoicing for free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative col-span-3 overflow-hidden rounded-2xl border border-neutral-n700 bg-gradient-to-t from-shade-ws4 to-neutral-n1000 flex flex-col items-center justify-center text-center p-6 md:p-10">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={vector1}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-n100">
              Book Anytime!
            </h3>
            <p className="mt-2 text-sm text-neutral-n200 max-w-[46ch]">
              You can pay a ticket in 2 portions throughout a fixed period of
              time. Start invoicing for free.
            </p>
            <div className="mt-6">
              <img
                src={clockImg}
                alt="24h"
                className="w-40 md:w-60 lg:w-72 opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
